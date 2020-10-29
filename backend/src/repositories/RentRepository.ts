import { getRepository, Repository } from 'typeorm';
import ICreateRentDTO from '../dtos/ICreateRentDTO';
import Rent from '../models/Rent';
import convertHoursToMinutes from '../utils/convertHoursToMinutes';
import IRentRepository, { IRequest } from './IRentRepository';

class RentRepository implements IRentRepository {
    private ormRepository: Repository<Rent>;

    constructor() {
        this.ormRepository = getRepository(Rent);
    }

    public async findByDate({
        from,
        to,
        request_time,
        return_time,
        user_id,
    }: IRequest): Promise<Rent | undefined> {
        const rent = await this.ormRepository.findOne({
            where: [
                {
                    from: new Date(from),
                    to: new Date(to),
                    request_time: convertHoursToMinutes(request_time),
                    return_time: convertHoursToMinutes(return_time),
                    user_id,
                },
            ],
        });

        return rent;
    }

    public async create({
        car_id,
        from,
        to,
        total_price,
        request_time,
        return_time,
        user_id,
    }: ICreateRentDTO): Promise<Rent> {
        const rent = this.ormRepository.create({
            car_id,
            from,
            to,
            total_price,
            request_time,
            return_time,
            user_id,
        });

        await this.ormRepository.save(rent);

        return rent;
    }
}

export default RentRepository;
