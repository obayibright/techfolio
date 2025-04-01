import { Resend } from 'resend'
import { NextResponse } from 'next/server'
import { rateLimit } from '@/lib/rate-limit'

const limiter = rateLimit({
    interval: 60 * 1000, // 60 seconds
    uniqueTokenPerInterval: 500 // Max number of users per interval
})

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
    try {
        if (!process.env.RESEND_API_KEY) {
            return NextResponse.json(
                { error: 'Server configuration error' },
                { status: 500 }
            )
        }

        const { name, email, country, message } = await request.json()

        // Rate limiting
        const identifier = request.headers.get('x-forwarded-for') ?? 'anonymous'
        try {
            await limiter.check(5, identifier) // 5 requests per minute
        } catch {
            return new NextResponse('Rate limit exceeded', { status: 429 })
        }

        // Send notification email to you
        await resend.emails.send({
            from: 'Techfolio Contact <onboarding@resend.dev>',
            to: 'britewaretechltd@gmail.com',
            subject: `New Contact Form Submission from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nCountry: ${country}\nMessage: ${message}`
        })

        // Send acknowledgment email to the user
        await resend.emails.send({
            from: 'Techfolio <onboarding@resend.dev>',
            to: email,
            subject: 'Thank you for contacting us',
            text: `Dear ${name},\n\nThank you for reaching out. We have received your message and will get back to you shortly.\n\nBest regards,\nBriteware Tech Team`
        })

        return NextResponse.json({ message: 'Emails sent successfully' }, { status: 200 })
    } catch (error) {
        console.error('Error sending email:', error)
        return NextResponse.json({ error: 'Error sending email' }, { status: 500 })
    }
}