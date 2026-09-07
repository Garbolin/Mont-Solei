const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async (event) => {
    // Solo permitir POST
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const { to, subject, message } = JSON.parse(event.body);

        // Validación básica
        if (!to || !subject || !message) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Faltan campos requeridos' }),
            };
        }

        const data = await resend.emails.send({
            from: 'Tu App <onboarding@resend.dev>', // o tu dominio verificado
            to: ['gabrielabuilcl@gmail.com'], // Cambia esto a la dirección de correo electrónico deseada
            subject: subject,
            html: `<p>${message}</p>`,
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ success: true, data }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};
