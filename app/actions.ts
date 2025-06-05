'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(formData: FormData) {
  const senderEmail = formData.get('email') as string
  const message = formData.get('message') as string

  if (!senderEmail || !message) {
    return {
      success: false,
      message: 'Please provide both email and message.',
    }
  }

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'info@yehtet.com', // Update this to your email
      subject: 'New message from your portfolio site',
      text: `From: ${senderEmail}\n\n${message}`,
    })

    return {
      success: true,
      message: 'Email sent successfully!',
    }
  } catch (error) {
    console.error('Error sending email:', error)
    return {
      success: false,
      message: 'Failed to send email. Please try again later.',
    }
  }
}