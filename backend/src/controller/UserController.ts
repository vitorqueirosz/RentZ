import { Request, Response } from 'express';

import UserRepository from '../repositories/UserRepository';

import CreateUserService from '../services/CreateUserService';
import FindRentsService from '../services/FindRentsService';
import FindUserService from '../services/FindUserService';

class UserController {
    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { name, cpf, email, password } = request.body;

        const userRepository = new UserRepository();
        const createUserService = new CreateUserService(userRepository);

        const user = await createUserService.execute({
            name,
            cpf,
            email,
            password,
        });

        return response.status(201).json(user);
    }

    public async index(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { id } = request.user;

        const userRepository = new UserRepository();
        const findUserService = new FindUserService(userRepository);

        const user = await findUserService.execute(id);

        return response.json(user);
    }

    public async search(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const userRepository = new UserRepository();
        const findRentsService = new FindRentsService(userRepository);

        const { id } = request.user;

        const user = await findRentsService.execute(id);

        return response.json(user);
    }
}

export default UserController;
