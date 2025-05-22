// server/api/send-email.ts
import { defineEventHandler, readBody } from 'h3'
import sgMail from '@sendgrid/mail'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const { email } = body

    sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

    const msg = {
        to: 'pasatandrei86@gmail.com', // unde vrei să primești notificarea
        from: 'noreply@coachinmd.com', // trebuie validat în SendGrid
        subject: 'Nou abonat!',
        text: `Email nou abonat: ${email}`
    }

    try {
        await sgMail.send(msg)
        return { success: true }
    } catch (err) {
        console.error(err)
        return { success: false, error: err.message }
    }
})
