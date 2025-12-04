/*
 Simple Express server to handle contact form submissions and send email via Nodemailer.

 Usage:
 1. Install dependencies: `npm install` (or `npm install express nodemailer dotenv cors`)
 2. Set environment variables in `.env.local`:
    EMAIL_USER, EMAIL_PASS, EMAIL_TO (optional), PORT (optional)
    For local frontend to target the server, set `VITE_API_URL=http://localhost:3001` in your Vite env.
 3. Run server: `npm run start-server`
*/

import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import nodemailer from 'nodemailer'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// Load environment variables. Prefer `.env.local` if present, then fall back to default .env
dotenv.config({ path: '.env.local' })
dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
// Allow requests from Vite dev server; set VITE_API_URL if different origin
app.use(cors())

// Serve production build if available (single-command deployment: build -> start)
try {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)
  const distPath = path.join(__dirname, 'dist')

  if (fs.existsSync(distPath)) {
    app.use(express.static(distPath))

    // SPA fallback: return index.html for any other route
    app.get('*', (req, res, next) => {
      const indexHtml = path.join(distPath, 'index.html')
      if (fs.existsSync(indexHtml)) {
        return res.sendFile(indexHtml)
      }
      return next()
    })
  }
} catch (err) {
  // If something goes wrong with static serving, continue to API routes
  console.error('Error setting up static file serving:', err)
}

// Basic health check
app.get('/api/health', (_req, res) => {
  res.json({ ok: true })
})

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, company, message } = req.body

    // Log received payload (for debugging) — do not log sensitive data in production
    console.log('Received contact request:', {
      name: name || '(no name)',
      email: email || '(no email)',
      phone: phone || '(no phone)',
      company: company || '(no company)'
    })

    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: 'Missing required fields' })
    }

    // Ensure env variables exist
    const user = process.env.EMAIL_USER
    const pass = process.env.EMAIL_PASS
    const to = process.env.EMAIL_TO || process.env.EMAIL_USER

    if (!user || !pass || !to) {
      return res.status(500).json({ ok: false, error: 'Email transporter not configured' })
    }


    // Create transporter (Gmail SMTP - app password recommended)
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user,
        pass,
      },
    })

    // Verify transporter connectivity and authentication before sending
    try {
      await transporter.verify()
      console.log('Email transporter verified')
    } catch (verifyErr) {
      console.error('Error verifying email transporter:', verifyErr && verifyErr.message ? verifyErr.message : verifyErr)
      return res.status(500).json({ ok: false, error: 'Email transporter verification failed. Check EMAIL_USER/EMAIL_PASS.' })
    }

    const mailText = `New contact form submission:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || '-'}\nCompany: ${company || '-'}\n\nMessage:\n${message}`

    const mailOptions = {
      from: `"Website Contact" <${user}>`,
      to,
      subject: `New contact from ${name}`,
      text: mailText,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Phone:</strong> ${phone || '-'}</p>
             <p><strong>Company:</strong> ${company || '-'}</p>
             <hr/>
             <p>${message.replace(/\n/g, '<br/>')}</p>`,
    }

    try {
      await transporter.sendMail(mailOptions)
      console.log('Contact email sent to', to)
    } catch (sendErr) {
      console.error('Error sending contact email:', sendErr && sendErr.message ? sendErr.message : sendErr)
      return res.status(500).json({ ok: false, error: 'Failed to send email. See server logs for details.' })
    }

    return res.json({ ok: true })
  } catch (err) {
    console.error('Error sending contact email', err)
    return res.status(500).json({ ok: false, error: 'Failed to send email' })
  }
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  const cfgUser = process.env.EMAIL_USER ? 'present' : 'missing'
  const cfgPass = process.env.EMAIL_PASS ? 'present' : 'missing'
  const cfgTo = process.env.EMAIL_TO || process.env.EMAIL_USER ? 'present' : 'missing'
  console.log(`Contact email server listening on http://localhost:${PORT}`)
  console.log(`Email config: EMAIL_USER=${cfgUser}, EMAIL_PASS=${cfgPass}, EMAIL_TO=${cfgTo}`)
})
