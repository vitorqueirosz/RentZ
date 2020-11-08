import { Router } from 'express';
import multer from 'multer';
import nodemailer, { createTransport } from 'nodemailer';
import UserController from '../controller/UserController';
import ensureAuhenticated from '../middlewares/ensureAuthenticated';

import UpdateUserAvatarController from '../controller/UpdateUserAvatarController';

import uploadConfig from '../config/upload';

const userController = new UserController();
const updateUserAvatarController = new UpdateUserAvatarController();

const userRoutes = Router();

const upload = multer(uploadConfig);

userRoutes.post('/', userController.create);

userRoutes.use(ensureAuhenticated);

userRoutes.get('/', userController.index);
userRoutes.get('/rents', userController.search);

userRoutes.get('/email', (req, res) => {
    const transporter = createTransport({
        host: 'smtp.mailtrap.io',
        port: 2525,
        auth: {
            user: '8e4adb5b8e0ff7',
            pass: 'e705563bb63fae',
        },
    });

    transporter.sendMail({
        from: 'vitorqueiroszti@gmail.com',
        to: 'vitorqueiroszti@gmail.com',
        subject: 'Confirmacao de reserva - RentZ',
        html: '<h1>Oi<h1>',
    });

    return res.json('ok');
});

userRoutes.patch(
    '/avatar',
    upload.single('avatar'),
    updateUserAvatarController.update,
);

export default userRoutes;
