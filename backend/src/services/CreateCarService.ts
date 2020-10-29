import AppError from '../errors/AppError';
import Car from '../models/Car';

import ICarRepository from '../repositories/ICarRepository';

interface IRequest {
    name: string;
    image: string;
    category: string;
    kms: string;
    price: number;
    seats: number;
    transmission: string;
    type: string;
    brand_id: string;
}

class CreateCarService {
    private carRepository: ICarRepository;

    constructor(carRepository: ICarRepository) {
        this.carRepository = carRepository;
    }

    public async execute({
        name,
        image,
        category,
        kms,
        price,
        seats,
        transmission,
        type,
        brand_id,
    }: IRequest): Promise<Car> {
        const carExists = await this.carRepository.findByName(name);

        if (carExists) {
            throw new AppError('Car already exists', 400);
        }

        const car = await this.carRepository.create({
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

        return car;
    }
}

export default CreateCarService;
