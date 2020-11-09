import { Request, Response } from 'express';
import { createTransport } from 'nodemailer';

class SendEmailController {
    async send(request: Request, response: Response) {
        const {
            name,
            email,
            car_id,
            from,
            to,
            request_time,
            return_time,
            total_price,
        } = request.body;

        const transporter = createTransport({
            host: 'smtp.mailtrap.io',
            port: 2525,
            auth: {
                user: '8e4adb5b8e0ff7',
                pass: 'e705563bb63fae',
            },
        });

        transporter.sendMail({
            from: 'Equipe Rentz <vitorqueiroszti@gmail.com>',
            to: email,
            subject: 'Confirmacao de reserva - RentZ',
            html: `
                <p>Ola ${name}, aqui estao algumas informacoes sobre sua reserva.</p>

                <h3>Data:</h3>

                De ${from} - Ate ${to}

                <p>Horario de retirada: ${request_time}</p>,
                <p>Horario de entrega: ${return_time}</p>,

                <p>Preco total: ${total_price}</p>
                `,
        });

        return response.json('email sended');
    }
}

export default SendEmailController;
