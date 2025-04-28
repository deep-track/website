import { Resend } from 'resend'
import { db } from '@/lib/firebaseConfig'
import { ref, set } from 'firebase/database'
import { v4 as uuidv4 } from 'uuid'

const resend = new Resend(process.env.RESEND_API_KEY || '')

export async function GET(req: Request): Promise<Response> {
  const { searchParams } = new URL(req.url)
  const email = searchParams.get('email')
  const name = searchParams.get('name')

  if (!email || !name) {
    return new Response('Missing email or name', { status: 400 })
  }

  const token = uuidv4()
  const expiresAt = Date.now() + 3 * 60 * 1000 // 3 minutes

  try {
    // Store token and expiry in Firebase Realtime Database
    await set(ref(db, `accessTokens/${token}`), {
      email,
      name,
      expiresAt,
    })

    const accessLink = `${process.env.BASE_URL}/documents?token=${token}`;

    await resend.emails.send({
      from: 'Document Access <onboarding@resend.dev>',
      to: email,
      subject: '✅ Access Granted - Your Document is Ready',
      html: `
        <h2>Hi ${name},</h2>
        <p>Your document is ready.</p>
        <a href="${accessLink}">🔓 Access Document</a>
        <p>This link is valid for <strong>3 minutes</strong>.</p>
      `,
    })

    return new Response('Access email sent to user!', { status: 200 })
  } catch (err) {
    console.error(err)
    return new Response('Error sending access email.', { status: 500 })
  }
}
