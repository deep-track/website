import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export const POST = async (request: Request) => {
  try {
    // Get the form data from the request
    const formData = await request.formData();
    const name = formData.get('name')?.toString();
    const email = formData.get('email')?.toString();

    // Validate the data
    if (!name || !email) {
      return NextResponse.json(
        { success: false, message: 'Name and email are required' },
        { status: 400 }
      );
    }
    // 1.0 Check if the email already exists
    const existingUser = await db.waitlist.findMany({
      where: {
        email: email
      }
    });


    if (existingUser.length !== 0) {
      return NextResponse.json(
        { success: false, message: 'This email is already registered on the waitlist' },
        { status: 400 }
      );
    }

    // 1.1 Save to database
    await db.waitlist.create({
      data: {
        name: name,
        email: email,
        updatedAt: new Date()
      }
    });

    // 2. Send confirmation email

    
    
    // 3. Add to contact list

    return NextResponse.json(
      {
        success: true,
        message: 'Successfully joined waitlist',
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Waitlist submission error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}