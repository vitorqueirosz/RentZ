import path from 'path';
import fs from 'fs';
import AppError from '../errors/AppError';
import IUserRepository from '../repositories/IUserRepository';

import uploadConfig from '../config/upload';
import User from '../models/User';

interface IRequest {
    user_id: string;
    avatarFile: string;
}

class UpdateUserService {
    private userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    public async execute({ user_id, avatarFile }: IRequest): Promise<User> {
        const user = await this.userRepository.findById(user_id);

        if (!user) {
            throw new AppError(
                'Only authenticated users can change avatar.',
                401,
            );
        }

        if (user.avatar) {
            const userAvatarFilePath = path.join(
                uploadConfig.directory,
                user.avatar,
            );
            const userAvatarFileExists = await fs.promises.stat(
                userAvatarFilePath,
            );

            if (userAvatarFileExists) {
                await fs.promises.unlink(userAvatarFilePath);
            }
        }

        user.avatar = avatarFile;

        await this.userRepository.save(user);

        return user;
    }
}

export default UpdateUserService;
