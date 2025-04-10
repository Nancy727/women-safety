import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function POST(request) {
  try {
    const { userId, complaintType, description, location } = await request.json();

    // Validate required fields
    if (!userId || !complaintType || !description) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Insert complaint into database
    const result = await pool.query(
      `INSERT INTO complaints 
       (user_id, complaint_type, description, location, status) 
       VALUES ($1, $2, $3, $4, $5) 
       RETURNING id`,
      [userId, complaintType, description, location || null, 'Pending']
    );

    return NextResponse.json({
      message: 'Complaint registered successfully',
      complaintId: result.rows[0].id
    });
  } catch (error) {
    console.error('Error registering complaint:', error);
    return NextResponse.json(
      { message: error.message || 'Error registering complaint' },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    // Get user from query parameters
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json(
        { message: 'User ID is required' },
        { status: 400 }
      );
    }

    // Get user's complaints
    const result = await pool.query(
      `SELECT * FROM complaints 
       WHERE user_id = $1 
       ORDER BY created_at DESC`,
      [userId]
    );

    return NextResponse.json({
      complaints: result.rows
    });
  } catch (error) {
    console.error('Error fetching complaints:', error);
    return NextResponse.json(
      { message: 'Error fetching complaints' },
      { status: 500 }
    );
  }
} 