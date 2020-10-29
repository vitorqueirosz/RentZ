import ICreateCarDTO from '../dtos/ICreateCarDTO';
import Car from '../models/Car';

export interface IRequest {
    type: string;
    transmission: string;
    initial_price: string;
    final_price: string;
    brand_id?: string | null;
}

export default interface ICarRepository {
    create(createCarDTO: ICreateCarDTO): Promise<Car>;
    findAllCars(): Promise<Car[] | undefined>;
    findByName(name: string): Promise<Car | undefined>;
    findById(id: string): Promise<Car | undefined>;
    findByFilters(data: IRequest): Promise<Car[] | undefined>;
}
