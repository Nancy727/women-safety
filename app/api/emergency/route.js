import { NextResponse } from 'next/server';
import twilio from 'twilio';
import pool from '@/lib/db';

const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export async function POST(request) {
  try {
    const { userId } = await request.json();

    if (!userId) {
      return NextResponse.json(
        { message: 'User ID is required' },
        { status: 400 }
      );
    }

    const userResult = await pool.query(
      'SELECT first_name, last_name FROM users WHERE id = $1',
      [userId]
    );

    if (userResult.rows.length === 0) {
      return NextResponse.json(
        { message: 'User not found' },
        { status: 404 }
      );
    }

    const user = userResult.rows[0];
    const userName = `${user.first_name} ${user.last_name}`;

    const contactsResult = await pool.query(
      'SELECT id, name, phone_number FROM emergency_contacts WHERE user_id = $1 AND phone_number IS NOT NULL AND phone_number != \'\' ORDER BY created_at DESC',
      [userId]
    );

    const contacts = contactsResult.rows;
    let successfulMessages = 0;
    let failedMessages = 0;

    for (const contact of contacts) {
      try {
        const formattedPhoneNumber = contact.phone_number.startsWith('+91') 
          ? contact.phone_number 
          : `+91${contact.phone_number.replace(/\D/g, '')}`;

        await twilioClient.messages.create({
          body: `EMERGENCY ALERT from ${userName}: I need immediate assistance! Please help!`,
          from: process.env.TWILIO_PHONE_NUMBER,
          to: formattedPhoneNumber
        });
        successfulMessages++;
      } catch (error) {
        console.error(`Failed to send message to ${contact.phone_number}:`, error);
        failedMessages++;
      }
    }

    return NextResponse.json({
      message: 'Emergency messages sent',
      contactsCount: contacts.length,
      successfulMessages,
      failedMessages
    });
  } catch (error) {
    console.error('Error in emergency API:', error);
    return NextResponse.json(
      { message: 'Error sending emergency messages' },
      { status: 500 }
    );
  }
} 