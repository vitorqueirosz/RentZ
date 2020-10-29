import { hash } from 'bcryptjs';
import User from '../models/User';
import IUserRepository from '../repositories/IUserRepository';

import AppError from '../errors/AppError';

interface IRequest {
    name: string;
    email: string;
    cpf: string;
    password: string;
}

class CreateUserService {
    private userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    public async execute({
        name,
        email,
        password,
        cpf,
    }: IRequest): Promise<User> {
        const userExists = await this.userRepository.findByEmail(email);

        const hashPassword = await hash(password, 8);

        if (userExists) {
            throw new AppError('User Already Exists', 500);
        }

        const user = await this.userRepository.create({
            name,
            email,
            password: hashPassword,
            cpf,
        });

        return user;
    }
}

export default CreateUserService;
