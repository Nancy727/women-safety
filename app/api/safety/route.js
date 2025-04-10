import { NextResponse } from 'next/server';

const PYTHON_API_URL = 'http://localhost:8000';

export async function GET() {
  try {
    console.log('Fetching states from Python API...');
    const response = await fetch(`${PYTHON_API_URL}/states`);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Failed to fetch states:', {
        status: response.status,
        statusText: response.statusText,
        error: errorData
      });
      return NextResponse.json(
        { error: 'Failed to fetch states', details: errorData },
        { status: response.status }
      );
    }
    
    const data = await response.json();
    console.log('Received states:', data);
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching states:', error);
    return NextResponse.json(
      { error: 'Failed to fetch states', details: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const { state } = await request.json();
    console.log('Fetching safety data for state:', state);
    
    if (!state) {
      return NextResponse.json(
        { error: 'State is required' },
        { status: 400 }
      );
    }
    
    const response = await fetch(`${PYTHON_API_URL}/predict`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ state }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Failed to get prediction:', {
        status: response.status,
        statusText: response.statusText,
        error: errorData
      });
      
      // Return a more descriptive error message
      return NextResponse.json(
        { 
          error: 'Failed to get safety prediction',
          details: errorData.detail || 'Unknown error occurred',
          status: response.status 
        },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log('Received safety data:', data);
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching safety data:', error);
    return NextResponse.json(
      { 
        error: 'Failed to get safety prediction',
        details: error.message,
        status: 500
      },
      { status: 500 }
    );
  }
} 