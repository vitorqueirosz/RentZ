import { Router } from 'express';
import multer from 'multer';

import UserController from '../controller/UserController';
import ensureAuhenticated from '../middlewares/ensureAuthenticated';

import UpdateUserAvatarController from '../controller/UpdateUserAvatarController';
import SendEmailController from '../controller/SendEmailController';

import uploadConfig from '../config/upload';

const userController = new UserController();
const updateUserAvatarController = new UpdateUserAvatarController();
const sendEmailController = new SendEmailController();

const userRoutes = Router();

const upload = multer(uploadConfig);

userRoutes.post('/', userController.create);

userRoutes.use(ensureAuhenticated);

userRoutes.get('/', userController.index);
userRoutes.get('/rents', userController.search);

userRoutes.post('/email', sendEmailController.send);

userRoutes.patch(
    '/avatar',
    upload.single('avatar'),
    updateUserAvatarController.update,
);

export default userRoutes;
