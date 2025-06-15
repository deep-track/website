import { google } from 'googleapis';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { firstName, lastName, email, company, department } = body;

  try {
    // Load credentials
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
    const spreadsheetId = process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID;
    const emailusedforgooglesheets = process.env.NEXT_PUBLIC_EMAIL_USED_FOR_GOOGLE_SHEETS;

    if (!clientEmail || !privateKey || !spreadsheetId) {
      throw new Error('Missing Google credentials or sheet ID.');
    }

    // Authenticate
    const auth = new google.auth.JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Append data to Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A1:F1',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[
          firstName,
          lastName,
          email,
          company,
          department,
          new Date().toLocaleString('en-GB', { timeZone: 'Africa/Nairobi' }),
        ]],
      },
    });

    // Send email with button to open Google Sheet
    const sheetUrl = 'https://docs.google.com/spreadsheets/d/1rxMe2_CkgxQy96RcxA_g444iRFSvp11Td4jM86uRhSA/edit?gid=0#gid=0';

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: emailusedforgooglesheets || '<tech@deeptrack.io>',
      subject: 'New Webinar Registration',
      html: `
        <h3>New Webinar Registration</h3>
        <ul>
          <li><strong>Name:</strong> ${firstName} ${lastName}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Company:</strong> ${company}</li>
          <li><strong>Department:</strong> ${department}</li>
        </ul>
        <p>Time: ${new Date().toLocaleString('en-GB', { timeZone: 'Africa/Nairobi' })}</p>
        <p>
          <a href="${sheetUrl}" target="_blank" style="
            background-color: #1a73e8;
            color: white;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            display: inline-block;
            margin-top: 20px;
          ">View Full Registration List</a>
        </p>
      `,
     
    });

    return NextResponse.json({ message: 'User added and email sent.' });
  } catch (error: any) {
    console.error('Submission error:', error.message || error);
    return NextResponse.json({ message: 'Something went wrong.' }, { status: 500 });
  }
}
