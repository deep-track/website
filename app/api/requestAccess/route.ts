import { Resend } from 'resend'
import { NextRequest } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY as string)

export async function POST(req: NextRequest) {
  try {
    const { name, email, type }: { name: string; email: string; type: string } = await req.json()
    const trimmedTitle = type.slice(8)

    await resend.emails.send({
      from: 'Access Request <onboarding@resend.dev>',
      to: process.env.TO_EMAIL as string,
      subject: `Access Request for "${trimmedTitle}" by ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #eaeaea; padding: 20px; border-radius: 8px;">
          <h2 style="color: #333;">📩 New Access Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Document Title:</strong> ${trimmedTitle}</p>
          <p style="margin-top: 20px;">This user is requesting to <strong>download the document titled "${trimmedTitle}"</strong>.</p>
          <div style="margin-top: 30px;">
            <a href="${process.env.BASE_URL}/api/grantAccess?email=${encodeURIComponent(email)}&name=${encodeURIComponent(name)}&title=${encodeURIComponent(trimmedTitle)}"
              style="background-color: #13dfde; color: white; padding: 12px 20px; text-decoration: none; border-radius: 6px;">
              ✅ Grant Access
            </a>
            <a href="${process.env.BASE_URL}/api/exportExcel"
              style="margin-left: 15px; background-color: #4CAF50; color: white; padding: 12px 20px; text-decoration: none; border-radius: 6px;">
              📄 Get View List
            </a>
          </div>
        </div>
      `,
    })

    return Response.json({ success: true })
  } catch (error) {
    console.error(error)
    return Response.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
