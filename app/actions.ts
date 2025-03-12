"use server"

import { z } from "zod"
import nodemailer from "nodemailer"
import "dotenv/config"


const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10).max(15),
  subject: z.string().min(5),
  message: z.string().min(10),
})

export async function sendContactEmail(data: z.infer<typeof formSchema>) {
  // Validate the form data
  const validatedData = formSchema.parse(data)


// Create a transporter
const transporter = nodemailer.createTransport({
  service: "gmail", // Change this to your email provider
  auth: {
    user: process.env.EMAIL_USER, // Your email
    pass: process.env.EMAIL_PASS, // Your email password or app password
  },
})

// Email options
const mailOptions = {
  from: process.env.EMAIL_USER,
  to: "info@florianhurelhaircouture.com", // Change this to the recipient's email
  subject: "Florian Hurel Contact Form Submission",
  text: `Name: ${validatedData.name}\nEmail: ${validatedData.email}\nPhone: ${validatedData.phone}\nMessage: ${validatedData.message}`,

}

try {
  await transporter.sendMail(mailOptions)
  return { success: true }
} catch (error) {
  console.error("Error sending email:", error)
  return { success: false, error: "Failed to send email" }
}

}

