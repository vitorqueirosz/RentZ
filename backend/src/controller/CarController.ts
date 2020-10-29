import { Request, Response } from 'express';

import CarRepository from '../repositories/CarRepository';

import CreateCarService from '../services/CreateCarService';
import FindCarService from '../services/FindCarByIdService';

import FindCarByFilterService from '../services/FindCarByFilterService';

class CarController {
    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const {
            name,
            category,
            kms,
            price,
            seats,
            transmission,
            type,
            brand_id,
        } = request.body;

        const image = request.file?.filename;

        const carRepository = new CarRepository();
        const createCarService = new CreateCarService(carRepository);

        const car = await createCarService.execute({
            name,
            image,
            category,
            kms,
            price,
            seats,
            transmission,
            type,
            brand_id,
        });

        return response.status(201).json(car);
    }

    public async index(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { id } = request.params;

        const carRepository = new CarRepository();
        const findCarService = new FindCarService(carRepository);

        const car = await findCarService.execute(id);

        return response.json(car);
    }

    public async search(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const {
            type,
            transmission,
            initial_price,
            final_price,
            brand_id,
        } = request.query;

        const carRepository = new CarRepository();
        const findCarService = new FindCarByFilterService(carRepository);

        if (!brand_id) {
            const car = await findCarService.execute({
                type: String(type),
                initial_price: String(initial_price),
                final_price: String(final_price),
                transmission: String(transmission),
            });

            return response.json(car);
        }

        const car = await findCarService.execute({
            type: String(type),
            initial_price: String(initial_price),
            final_price: String(final_price),
            transmission: String(transmission),
            brand_id: String(brand_id) || null,
        });

        return response.json(car);
    }

    public async searchAll(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const carRepository = new CarRepository();

        const cars = await carRepository.findAllCars();

        return response.json(cars);
    }
}

export default CarController;
