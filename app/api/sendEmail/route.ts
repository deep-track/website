// import nodemailer from 'nodemailer';
// import { NextResponse } from 'next/server';

// export async function POST(req: Request) {
//     const {firstName, email} = await req.json();
//     const senderEMail = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
//     const senderEmailPassword = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;

//     const transport = nodemailer.createTransport({
//         host: 'smtp.gmail.com',
//         port: 587,
//         tls: {
//             ciphers: 'SSLv3',
//             rejectUnauthorized: false,
//         },
//         auth: {
//             user: senderEMail,
//             pass: senderEmailPassword
//         }
//     });

//     try {
//         await transport.sendMail({
//             from: `"deeptrack™"   ${senderEMail}`,
//             to: email,
//             subject: 'Your Webinar Spot is Confirmed:Media Verification, Newsroom Webinar',
//             html: `
//             <p>Hello ${firstName},</p>
//             <p>
//                 Thank you for registering for our upcoming webinar, Media Verification in the Age of AI. We're excited to have you join us for this insightful session.
//             </p>
//             <p>
//                 As a quick introduction, deeptrack™ is an advanced deepfake detection solution designed for media outlets, financial institutions, and government agencies. <br />
//                 We leverage cutting-edge machine learning and AI to provide a robust platform for detecting manipulated or synthetic media content.
//             </p>
//             <h4>Webinar Details:</h4>
//             <ul>
//                 <li>Topic: Media Verification in the Age of AI</li>
//                 <li>Date: Monday, 30th June, 2025</li>
//                 <li>Time: 2 pm EAT</li>
//                 <li>Webinar Link: <a href="https://meet.google.com/gfx-wybp-zjo">https://meet.google.com/gfx-wybp-zjo</a></li>
//             </ul>

//             <h4>Our speakers will share about:</h4>
//             <ul>
//                 <li>The rise of deepfake-driven identity fraud and how fraudsters exploit this technology.</li>
//                 <li>Impact projections of fraud enabled by generative AI and the growing need for advanced defense mechanisms.</li>
//                 <li>DeepTrack's holistic approach to media verification, securing every touchpoint in the media newsroom.</li>
//             </ul>

//             <h4>Meet our speakers:</h4>
//             <ul>
//                 <li>Bonam Osene - Software Engineer, deeptrack™</li>
//                 <li>Bryan Koyundi - CEO at deeptrack™</li>
//                 <li>Paul Okello - Tech Lead at deeptrack™</li>
//             </ul>
//             <p>We can't wait to host you and dive into this critical conversation. We encourage you to add this event to your calendar.</p>
//             <p>If you have any questions ahead of the event, feel free to reach out on our <a href="https://x.com/deeptrck">X(formerly Twitter)</a> or email: info@deeptrack.io.</p>
//             <p>See you on June 30th!</p>
//             <p><p/>
//             <p>
//                 Best regards, <br />
//                 The deeptrack™ Team.
//             </p>
//             `
//         });
//         return NextResponse.json({message: `Your webinar invite has been sent to ${email}`})
//     } catch (error) {
//         console.log(error);
//         return NextResponse.json(
//             {
//                 message: 'Couldn\'t send your invite. Please try again',
//                 status: 400
//             }
//         )
//     }
// }


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
