import { Between, getRepository, Repository } from 'typeorm';
import ICreateCarDTO from '../dtos/ICreateCarDTO';
import Brand from '../models/Brand';
import Car from '../models/Car';
import ICarRepository, { IRequest } from './ICarRepository';

class CarRepository implements ICarRepository {
    private ormRepository: Repository<Car>;

    constructor() {
        this.ormRepository = getRepository(Car);
    }

    public async findAllCars(): Promise<Car[] | undefined> {
        const cars = await this.ormRepository.find({ relations: ['brand'] });

        const carsList = cars.map(c => ({
            ...c,
            image: `http://192.168.0.119:3333/uploads/${c.image}`,
            brand: c.brand.name,
        }));

        return carsList as Car[];
    }

    public async findByFilters({
        type,
        transmission,
        initial_price,
        final_price,
        brand_id,
    }: IRequest): Promise<Car[] | undefined> {
        if (brand_id) {
            const car = await this.ormRepository.find({
                where: {
                    type,
                    transmission,
                    brand_id,
                    price: Between(initial_price, final_price),
                },
                relations: ['brand'],
            });

            const cars = car.map(c => ({
                id: c.id,
                name: c.name,
                brand_id: c.brand_id,
                transmission: c.transmission,
                type: c.type,
                kms: c.kms,
                image: `http://192.168.0.119:3333/uploads/${c.image}`,
                price: c.price,
                seats: c.seats,
                category: c.category,
                brand: c.brand.name,
            }));

            return cars as Car[];
        }

        const car = await this.ormRepository.find({
            where: {
                type,
                transmission,
                price: Between(initial_price, final_price),
            },
            relations: ['brand'],
        });

        if (!car) {
            return undefined;
        }

        const cars = car.map(c => ({
            id: c.id,
            name: c.name,
            brand_id: c.brand_id,
            transmission: c.transmission,
            type: c.type,
            kms: c.kms,
            image: `http://192.168.0.119:3333/uploads/${c.image}`,
            price: c.price,
            seats: c.seats,
            category: c.category,
            brand: c.brand.name,
        }));

        return cars as Car[];
    }

    public async findById(id: string): Promise<Car | undefined> {
        const car = await this.ormRepository.findOne({ where: { id } });

        if (!car) {
            return undefined;
        }

        car.image = `http://192.168.0.119:3333/uploads/${car.image}`;

        return car;
    }

    public async create({
        name,
        category,
        image,
        price,
        brand_id,
        seats,
        kms,
        transmission,
        type,
    }: ICreateCarDTO): Promise<Car> {
        const car = this.ormRepository.create({
            name,
            category,
            image,
            price,
            brand_id,
            seats,
            kms,
            transmission,
            type,
        });

        await this.ormRepository.save(car);

        return car;
    }

    public async findByName(name: string): Promise<Car | undefined> {
        const car = await this.ormRepository.findOne({ where: { name } });

        return car;
    }
}

export default CarRepository;
