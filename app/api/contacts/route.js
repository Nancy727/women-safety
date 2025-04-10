import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json(
        { message: 'User ID is required' },
        { status: 400 }
      );
    }

    const result = await pool.query(
      'SELECT * FROM emergency_contacts WHERE user_id = $1 ORDER BY created_at DESC',
      [userId]
    );

    return NextResponse.json({ contacts: result.rows });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return NextResponse.json(
      { message: 'Error fetching contacts' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const { userId, name, phoneNumber } = await request.json();

    if (!userId || !name || !phoneNumber) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Format phone number to E.164 format
    const formattedPhoneNumber = phoneNumber.replace(/\D/g, '');
    if (formattedPhoneNumber.length < 10) {
      return NextResponse.json(
        { message: 'Invalid phone number format' },
        { status: 400 }
      );
    }

    // Add country code if not present
    const e164PhoneNumber = formattedPhoneNumber.startsWith('91') 
      ? `+${formattedPhoneNumber}`
      : `+91${formattedPhoneNumber}`;

    // Check if user has reached the maximum number of contacts (5)
    const countResult = await pool.query(
      'SELECT COUNT(*) FROM emergency_contacts WHERE user_id = $1',
      [userId]
    );

    if (countResult.rows[0].count >= 5) {
      return NextResponse.json(
        { message: 'Maximum number of contacts reached (5)' },
        { status: 400 }
      );
    }

    const result = await pool.query(
      'INSERT INTO emergency_contacts (user_id, name, phone_number) VALUES ($1, $2, $3) RETURNING *',
      [userId, name, e164PhoneNumber]
    );

    return NextResponse.json({ contact: result.rows[0] });
  } catch (error) {
    console.error('Error adding contact:', error);
    return NextResponse.json(
      { message: 'Error adding contact' },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const contactId = searchParams.get('id');

    if (!contactId) {
      return NextResponse.json(
        { message: 'Contact ID is required' },
        { status: 400 }
      );
    }

    await pool.query(
      'DELETE FROM emergency_contacts WHERE id = $1',
      [contactId]
    );

    return NextResponse.json({ message: 'Contact deleted successfully' });
  } catch (error) {
    console.error('Error deleting contact:', error);
    return NextResponse.json(
      { message: 'Error deleting contact' },
      { status: 500 }
    );
  }
} 