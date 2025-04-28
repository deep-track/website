import { db } from '@/lib/firebaseConfig'
import { get, ref } from 'firebase/database'
import * as XLSX from 'xlsx'

export async function GET(): Promise<Response> {
  try {
    const snapshot = await get(ref(db, 'accessTokens'))
    if (!snapshot.exists()) {
      return new Response('No data found', { status: 404 })
    }

    const rawData = snapshot.val() as Record<string, { name: string; email: string; expiresAt: number }>
    const formattedData = Object.keys(rawData).map((token) => ({
      Name: rawData[token].name,
      Email: rawData[token].email,
      Timestamp: new Date(rawData[token].expiresAt).toLocaleString('en-KE', {
        timeZone: 'Africa/Nairobi',
      }),
    }))

    const workbook = XLSX.utils.book_new()
    const worksheet = XLSX.utils.json_to_sheet(formattedData)
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Access Logs')

    const buffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' })

    return new Response(buffer, {
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'Content-Disposition': 'attachment; filename="access-log.xlsx"',
      },
    })
  } catch (error) {
    console.error('Failed to export Excel:', error)
    return new Response('Error exporting Excel', { status: 500 })
  }
}
