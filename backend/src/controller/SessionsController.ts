import { Request, Response } from 'express';

import UserRepository from '../repositories/UserRepository';

import SessionService from '../services/AuthenticateUserService';

class SessionController {
    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { email, password } = request.body;

        const userRepository = new UserRepository();
        const createSessionService = new SessionService(userRepository);

        const session = await createSessionService.execute({
            email,
            password,
        });

        return response.json(session);
    }
}

export default SessionController;
