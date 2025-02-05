
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    const { email, message, topic } = await request.json();
    try {
        const { data, error } = await resend.emails.send({
            from: 'ForeStep <noreply@email.mienem.dev>',
            to: ["gillsimranjot91@gmail.com"],
            subject: 'Hello world',
            html: `
            <p><strong>From:</strong> ${email}</p>
            <p><strong>Selection:</strong> ${topic}</p>
            <p><strong>Message:</strong> ${message}</p>`
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }
        try {
            const { data, error } = await resend.emails.send({
                from: 'ForeStep <noreply@email.mienem.dev>',
                to: [email],
                subject: 'Hello world',
                html: `
                    <h1>Hi </strong> ${email}</h1>
                    <p>This is an automated email, our team will be in contact with you shortely.</p>`
            });

            if (error) {
                return Response.json({ error }, { status: 500 });
            }
        }
        catch (error) {
            return Response.json({ error }, { status: 500 });
        }
        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
