import ICreateRentDTO from '../dtos/ICreateRentDTO';
import Rent from '../models/Rent';

export interface IRequest {
    request_time: string;
    return_time: string;
    from: string;
    to: string;
    user_id: string;
}

export default interface IRentRepository {
    create(createRentDTO: ICreateRentDTO): Promise<Rent>;
    findByDate(data: IRequest): Promise<Rent | undefined>;
}
