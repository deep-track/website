import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY || '')

export async function GET(req: Request): Promise<Response> {
  const { searchParams } = new URL(req.url)
  const email = searchParams.get('email')
  const name = searchParams.get('name')
  const title = searchParams.get('title') // the trimmedTitle

  if (!email || !name || !title) {
    return new Response('Missing email, name, or title', { status: 400 })
  }

  // Select the document path and file properties
  let documentPath: string
  let filename: string
  let contentType: string

  switch (title.toLowerCase()) {
    case 'cap table':
      documentPath = '/files/deeptrackCapTableUpdated.pdf'
      filename = 'Cap Table.pdf'
      contentType = 'application/pdf'
      break
    case 'pitch deck':
      documentPath = '/files/deeptrackPitchDeck.pdf'
      filename = 'Pitch Deck.pdf'
      contentType = 'application/pdf'
      break
    case 'competition analysis':
      documentPath = '/files/deeptrackCompetitor.xlsx'
      filename = 'Competition Analysis.xlsx'
      contentType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      break
    default:
      return new Response(`Unknown document title: ${title}`, { status: 400 })
  }

  try {
    const documentUrl = `${process.env.BASE_URL}${documentPath}`
    const fileRes = await fetch(documentUrl)

    if (!fileRes.ok) {
      throw new Error('Failed to fetch the document')
    }

    const arrayBuffer = await fileRes.arrayBuffer()
    const base64Data = Buffer.from(arrayBuffer).toString('base64')

    await resend.emails.send({
      from: 'Document Access <onboarding@resend.dev>',
      to: email,
      subject: `📄 Your Requested Document: ${title}`,
      html: `
        <h2>Hi ${name},</h2>
        <p>Attached is the <strong>${title}</strong> document you requested.</p>
        <p>Thanks for using our service!</p>
      `,
      attachments: [
        {
          filename,
          content: base64Data,
          contentType,
        },
      ],
    })

    return new Response('Document sent via email!', { status: 200 })
  } catch (err) {
    console.error(err)
    return new Response('Error sending document.', { status: 500 })
  }
}
