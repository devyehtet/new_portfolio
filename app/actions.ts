"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  try {
    const data = await resend.emails.send({
      from: "Contact Form <noreply@yehtet.com>", // Replace with your verified domain
      to: ["info@yehtet.com"],
      subject: `Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #065f46; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
            <h2 style="margin: 0; font-size: 24px;">New Contact Form Submission</h2>
          </div>
          <div style="background-color: white; padding: 20px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="margin-bottom: 15px;">
              <strong style="color: #065f46;">Name:</strong>
              <span style="margin-left: 10px;">${name}</span>
            </div>
            <div style="margin-bottom: 15px;">
              <strong style="color: #065f46;">Email:</strong>
              <span style="margin-left: 10px;">${email}</span>
            </div>
            <div style="margin-bottom: 15px;">
              <strong style="color: #065f46;">Subject:</strong>
              <span style="margin-left: 10px;">${subject}</span>
            </div>
            <div style="margin-bottom: 15px;">
              <strong style="color: #065f46;">Message:</strong>
              <div style="margin-top: 10px; padding: 15px; background-color: #f3f4f6; border-radius: 4px; border-left: 4px solid #10b981;">
                ${message.replace(/\n/g, "<br>")}
              </div>
            </div>
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
              <p>This email was sent from the contact form on yehtet.com</p>
            </div>
          </div>
        </div>
      `,
      replyTo: email, // This allows you to reply directly to the sender
    })

    return { success: true, message: "Email sent successfully!" }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, message: "Failed to send email. Please try again." }
  }
}
