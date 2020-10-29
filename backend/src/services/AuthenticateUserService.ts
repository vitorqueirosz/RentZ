import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import AppError from '../errors/AppError';
import User from '../models/User';
import IUserRepository from '../repositories/IUserRepository';

import authConfig from '../config/authConfig';

interface IRequest {
    email: string;
    password: string;
}

interface Response {
    token: string;
    user: User;
}

class AuthenticateUserService {
    private userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    public async execute({ email, password }: IRequest): Promise<Response> {
        const user = await this.userRepository.findByEmail(email);

        if (!user) {
            throw new AppError('Invalid credentials', 400);
        }

        const checkPassword = await compare(password, user.password);

        if (!checkPassword) {
            throw new AppError('Invalid credentials', 400);
        }

        const { secret, expiresIn } = authConfig.jwt;

        const token = sign({}, secret, { subject: user.id, expiresIn });

        return { user, token };
    }
}

export default AuthenticateUserService;
