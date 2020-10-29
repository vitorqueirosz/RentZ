import { Router } from 'express';
import multer from 'multer';
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

userRoutes.patch(
    '/avatar',
    upload.single('avatar'),
    updateUserAvatarController.update,
);

export default userRoutes;
