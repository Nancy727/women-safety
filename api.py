from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pandas as pd
import joblib
import numpy as np
from typing import List, Dict, Any
import uvicorn
import logging
import os

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Import the ML model and preprocessing functions
from womensafetyml import calculate_thresholds, classify_safety

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Your Next.js app URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Check if required files exist
required_files = ['crime_model.joblib', 'preprocessor.joblib', 'accuracy_metrics.joblib', 'content/CrimesOnWomenData.csv']
for file in required_files:
    if not os.path.exists(file):
        logger.error(f"Required file not found: {file}")
        raise FileNotFoundError(f"Required file not found: {file}")

# Load the model and preprocessor
try:
    model = joblib.load('crime_model.joblib')
    preprocessor = joblib.load('preprocessor.joblib')
    accuracy_metrics = joblib.load('accuracy_metrics.joblib')
    logger.info("✓ Model loaded successfully")
except Exception as e:
    logger.error(f"Error loading model: {e}")
    raise

# Load the data
try:
    data = pd.read_csv("content/CrimesOnWomenData.csv")
    crime_columns = ['Rape', 'K&A', 'DD', 'AoW', 'AoM', 'DV', 'WT']
    data['Total_Crimes'] = data[crime_columns].sum(axis=1)
    thresholds = calculate_thresholds(data)
    
    # Get unique states and print them
    available_states = sorted(data['State'].unique().tolist())
    logger.info(f"✓ Data loaded successfully. Found {len(data)} records")
    logger.info("Available states:")
    for state in available_states:
        logger.info(f"  - {state}")
except Exception as e:
    logger.error(f"Error loading data: {e}")
    raise

class StateRequest(BaseModel):
    state: str

class CrimeData(BaseModel):
    Rape: float
    K_A: float
    DD: float
    AoW: float
    AoM: float
    DV: float
    WT: float

class HistoricalData(BaseModel):
    year: int
    total_crimes: float
    crimes: Dict[str, float]

class SafetyResponse(BaseModel):
    state: str
    prediction: float
    safety_level: str
    confidence: float
    historical_data: List[HistoricalData]
    crime_distribution: Dict[str, float]
    thresholds: Dict[str, float]

@app.get("/states")
async def get_states():
    try:
        states = sorted(data['State'].unique().tolist())
        logger.info(f"Returning {len(states)} states")
        return {"states": states}
    except Exception as e:
        logger.error(f"Error getting states: {e}")
        raise HTTPException(status_code=500, detail="Failed to fetch states")

@app.post("/predict", response_model=SafetyResponse)
async def predict_safety(request: StateRequest):
    try:
        state = request.state.title()
        logger.info(f"Processing prediction request for state: {state}")
        
        # Check if state exists in any case
        state_exists = any(s.lower() == state.lower() for s in data['State'].unique())
        if not state_exists:
            available_states = sorted(data['State'].unique().tolist())
            logger.warning(f"State not found: {state}. Available states: {available_states}")
            raise HTTPException(
                status_code=404, 
                detail={
                    "message": f"State '{state}' not found",
                    "available_states": available_states
                }
            )
        
        # Get the correct case of the state name
        correct_state = next(s for s in data['State'].unique() if s.lower() == state.lower())
        logger.info(f"Found state with correct case: {correct_state}")
        
        # Get historical data
        state_data = data[data['State'] == correct_state].sort_values('Year').tail(5)
        if state_data.empty:
            logger.error(f"No historical data found for state: {correct_state}")
            raise HTTPException(status_code=404, detail=f"No historical data found for {correct_state}")
            
        latest_year = state_data['Year'].max()
        logger.info(f"Found historical data for {correct_state} from {latest_year - 4} to {latest_year}")
        
        # Calculate average crimes
        avg_crimes = state_data[crime_columns].mean()
        
        # Prepare prediction input
        prediction_input = pd.DataFrame([{
            'State': correct_state,
            'Year': latest_year + 1,
            **{col: avg_crimes[col] for col in crime_columns}
        }])
        
        # Make prediction
        try:
            processed_input = preprocessor.transform(prediction_input)
            predicted_crimes = model.predict(processed_input)[0]
            logger.info(f"Predicted crimes for {correct_state}: {predicted_crimes}")
        except Exception as e:
            logger.error(f"Error making prediction: {e}")
            raise HTTPException(status_code=500, detail=f"Error making prediction: {str(e)}")
        
        # Get crime distribution for latest year
        latest_data = state_data[state_data['Year'] == latest_year].iloc[0]
        crime_distribution = {col: float(latest_data[col]) for col in crime_columns}
        
        # Prepare historical data
        historical_data = []
        for _, row in state_data.iterrows():
            historical_data.append({
                "year": int(row['Year']),
                "total_crimes": float(row['Total_Crimes']),
                "crimes": {col: float(row[col]) for col in crime_columns}
            })
        
        response = {
            "state": correct_state,
            "prediction": float(predicted_crimes),
            "safety_level": classify_safety(predicted_crimes),
            "confidence": float(accuracy_metrics['R²']),
            "historical_data": historical_data,
            "crime_distribution": crime_distribution,
            "thresholds": {
                "safe": float(thresholds['safe']),
                "danger": float(thresholds['danger'])
            }
        }
        
        logger.info(f"Successfully generated prediction for {correct_state}")
        return response
        
    except HTTPException as he:
        raise he
    except Exception as e:
        logger.error(f"Error processing prediction request: {e}")
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    logger.info("Starting API server on http://localhost:8000")
    uvicorn.run(app, host="0.0.0.0", port=8000) 