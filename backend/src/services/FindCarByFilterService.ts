import AppError from '../errors/AppError';
import Car from '../models/Car';

import ICarRepository from '../repositories/ICarRepository';

export interface IRequest {
    type: string;
    transmission: string;
    initial_price: string;
    final_price: string;
    brand_id?: string | null;
}

class FindCarByFilterService {
    private carRepository: ICarRepository;

    constructor(carRepository: ICarRepository) {
        this.carRepository = carRepository;
    }

    public async execute({
        type,
        transmission,
        initial_price,
        final_price,
        brand_id,
    }: IRequest): Promise<Car[] | undefined> {
        const carExists = await this.carRepository.findByFilters({
            type,
            transmission,
            initial_price,
            final_price,
            brand_id,
        });

        if (!carExists) {
            throw new AppError('Car not found', 400);
        }

        return carExists;
    }
}

export default FindCarByFilterService;
