import AppError from '../errors/AppError';
import Rent from '../models/Rent';
import IRentRepository from '../repositories/IRentRepository';
import convertHoursToMinutes from '../utils/convertHoursToMinutes';

interface IRequest {
    user_id: string;
    car_id: string;
    from: string;
    to: string;
    request_time: string;
    return_time: string;
    total_price: number;
}

class CreateRentService {
    private rentRepository: IRentRepository;

    constructor(rentRepository: IRentRepository) {
        this.rentRepository = rentRepository;
    }

    public async execute({
        user_id,
        car_id,
        from,
        to,
        request_time,
        return_time,
        total_price,
    }: IRequest): Promise<Rent> {
        const rentExists = await this.rentRepository.findByDate({
            from,
            to,
            request_time,
            return_time,
            user_id,
        });

        if (rentExists) {
            throw new AppError('Rent Already booked on this Date', 400);
        }

        const rent = await this.rentRepository.create({
            user_id,
            car_id,
            from: new Date(from),
            to: new Date(to),
            request_time: convertHoursToMinutes(request_time),
            return_time: convertHoursToMinutes(return_time),
            total_price,
        });

        return rent;
    }
}

export default CreateRentService;
