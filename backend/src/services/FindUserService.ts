import User from '../models/User';
import IUserRepository from '../repositories/IUserRepository';

import AppError from '../errors/AppError';

class FindUserService {
    private userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    public async execute(id: string): Promise<User> {
        const user = await this.userRepository.findById(id);

        if (!user) {
            throw new AppError('User not found', 500);
        }

        return user;
    }
}

export default FindUserService;
