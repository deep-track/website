// Force Node.js runtime to support Buffer
export const runtime = 'nodejs';

import { NextRequest, NextResponse } from 'next/server';
import { PDFDocument, rgb, StandardFonts, PDFFont } from 'pdf-lib';

export async function POST(req: NextRequest): Promise<NextResponse> {
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
  }

  try {
    const body = await req.json();
    const { firstName, lastName, email, company, department } = body as {
      firstName: string;
      lastName: string;
      email: string;
      company: string;
      department: string;
    };

    if (!firstName || !lastName || !email || !company || !department) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create a new PDF document
    const pdfDoc: PDFDocument = await PDFDocument.create();
    const page = pdfDoc.addPage([595, 842]); // A4 size
    const { width, height } = page.getSize();

    const font: PDFFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

    const backgroundColor = rgb(0.015, 0, 0.18);     // #04002e
    const accentColor = rgb(0.01, 0.86, 0.78);       // #03dac6
    const white = rgb(1, 1, 1);

    // Draw background
    page.drawRectangle({
      x: 0,
      y: 0,
      width,
      height,
      color: backgroundColor,
    });

    // Draw header
    page.drawText('Webinar Registration Receipt', {
      x: 50,
      y: height - 80,
      size: 24,
      font,
      color: accentColor,
    });

    // Content lines
    const lines: string[] = [
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      `Company: ${company}`,
      `Department: ${department}`,
      '',
      'Date: 30th June 2025',
      'Time: 2:00 PM',
      'Zoom Link: https://us05web.zoom.us/j/83117426055?pwd=a4Fl0Wdvk9KFAb7T7lk4Db91Vzafua.1',
      'Meeting ID:  831 1742 6055',
      'Password:  6R3T8R',
    ];

    // Draw each line with adjusted size for Zoom link
    let y = height - 130;
    for (const rawLine of lines) {
      try {
        const isZoomLink = rawLine.startsWith('Zoom Link:');
        const fontSize = isZoomLink ? 10 : 14;
        const lineHeight = isZoomLink ? 18 : 24;

        page.drawText(rawLine, {
          x: 50,
          y,
          size: fontSize,
          font,
          color: white,
        });

        y -= lineHeight;
      } catch (drawError) {
        console.error('Error drawing text:', rawLine, drawError);
      }
    }

    // Generate PDF bytes
    const pdfBytes: Uint8Array = await pdfDoc.save();

    return new NextResponse(new Blob([pdfBytes], { type: 'application/pdf' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Webinar_Receipt.pdf"',
      },
    });

  } catch (error) {
    console.error('Error generating PDF:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
