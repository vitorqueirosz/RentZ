import { Request, Response } from 'express';

import UserRepository from '../repositories/UserRepository';
import UpdateUserService from '../services/UpdateUserAvatarService';

class UserAvatarController {
    public async update(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const userRepository = new UserRepository();
        const updateAvatarUserService = new UpdateUserService(userRepository);

        const user = await updateAvatarUserService.execute({
            user_id: request.user.id,
            avatarFile: request.file.filename,
        });

        return response.json(user);
    }
}

export default UserAvatarController;
