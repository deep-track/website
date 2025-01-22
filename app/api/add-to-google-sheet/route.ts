import { google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';

// Named export for the POST method
export async function POST(req: NextRequest) {
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
  }

  try {
    // Parse the request body
    const body = await req.json();
    const { name, phoneNumber, email, company, date, time } = body;

    // Validate that all required fields are present
    if (!name || !phoneNumber || !email || !company || !date || !time) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Load service account credentials
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: [
        'https://www.googleapis.com/auth/spreadsheets',
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
      ],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Spreadsheet ID and range
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    const range = 'Sheet1!A1:F1'; // Update to include 6 fields (A to F)

    // Append data to Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[name, phoneNumber, email, company, date, time]],
      },
    });

    return NextResponse.json(
      { message: 'Data added to Google Sheet' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error adding data to Google Sheet:', error);

    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
