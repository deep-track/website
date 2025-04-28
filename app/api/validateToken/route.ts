import { db } from '@/lib/firebaseConfig'
import { ref, get } from 'firebase/database'

export async function GET(req: Request): Promise<Response> {
  const { searchParams } = new URL(req.url)
  const token = searchParams.get('token')

  if (!token) {
    return new Response('Missing token', { status: 400 })
  }

  try {
    const tokenRef = ref(db, `accessTokens/${token}`)
    const snapshot = await get(tokenRef)

    if (!snapshot.exists()) {
      return new Response('Invalid or expired token', { status: 404 })
    }

    const data = snapshot.val() as { expiresAt: number } // typing the expected structure
    const now = Date.now()

    if (now > data.expiresAt) {
      return new Response('Token has expired', { status: 403 })
    }

    return new Response(JSON.stringify({ message: 'Token is valid', data }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Error validating token:', error)
    return new Response('Internal server error', { status: 500 })
  }
}
