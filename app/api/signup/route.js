import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import pool from '@/lib/db';

export async function POST(request) {
  try {
    const { firstName, lastName, username, password, age, sex, dob } = await request.json();

    // Check if username already exists
    const userExists = await pool.query(
      'SELECT * FROM users WHERE username = $1',
      [username]
    );

    if (userExists.rows.length > 0) {
      return NextResponse.json(
        { message: 'Username already taken' },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user
    const result = await pool.query(
      `INSERT INTO users 
       (first_name, last_name, username, password, age, sex, dob) 
       VALUES ($1, $2, $3, $4, $5, $6, $7) 
       RETURNING id, username, first_name, last_name`,
      [firstName, lastName, username, hashedPassword, age, sex, dob]
    );

    return NextResponse.json({
      message: 'User created successfully',
      user: result.rows[0]
    });
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { message: 'Error creating user' },
      { status: 500 }
    );
  }
} 