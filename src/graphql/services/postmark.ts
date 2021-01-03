import * as postmark from 'postmark'

export const client = new postmark.ServerClient(process.env.POSTMARK_CLIENT_ID)

interface HNDigestProps {
  email: string
  date: string
  unsubscribe_url: string
}

interface EmailMeProps {
  subject: string
  body: string
}

export function emailMe({ subject, body }: EmailMeProps) {
  return client.sendEmail({
    From: 'hi@brianlovin.com',
    To: 'hi@brianlovin.com',
    Subject: subject,
    TextBody: body,
  })
}
