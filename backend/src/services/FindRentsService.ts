import AppError from '../errors/AppError';

import User from '../models/User';

import IUserRepository from '../repositories/IUserRepository';

class FindRentsService {
    private userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    public async execute(user_id: string): Promise<User | undefined> {
        const userRents = await this.userRepository.findAllRents(user_id);

        if (!userRents) {
            throw new AppError('User dont have any rents booked', 400);
        }

        return userRents;
    }
}

export default FindRentsService;
