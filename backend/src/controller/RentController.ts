import { Request, Response } from 'express';

import RentRepository from '../repositories/RentRepository';

import CreateRentService from '../services/CreateRentService';

class RentController {
    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const {
            user_id,
            car_id,
            from,
            to,
            request_time,
            return_time,
            total_price,
        } = request.body;

        const rentRepository = new RentRepository();
        const createRentService = new CreateRentService(rentRepository);

        const rent = await createRentService.execute({
            user_id,
            car_id,
            from,
            to,
            request_time,
            return_time,
            total_price,
        });

        return response.status(201).json(rent);
    }
}

export default RentController;
