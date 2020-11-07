import { getRepository, Repository } from 'typeorm';
import ICreateUserDTO from '../dtos/ICreateUserDTO';

import User from '../models/User';
import IUserRepository from './IUserRepository';

class UserRepository implements IUserRepository {
    private ormRepository: Repository<User>;

    constructor() {
        this.ormRepository = getRepository(User);
    }

    public async save(user: User): Promise<User> {
        return this.ormRepository.save(user);
    }

    public async findById(id: string): Promise<User | undefined> {
        const user = await this.ormRepository.findOne({
            where: { id },
        });

        return user;
    }

    public async findAllRents(user_id: string): Promise<User | undefined> {
        const user = await this.ormRepository
            .createQueryBuilder('users')
            .leftJoinAndSelect('users.rents', 'rents')
            .leftJoinAndSelect('rents.car', 'car')
            .leftJoinAndSelect('car.brand', 'brand')
            .where('users.id = :id', { id: user_id })
            .getOne();

        if (user?.rents.length) {
            const rents = user?.rents.map(r => ({
                rent: {
                    id: r.id,
                    from: r.from,
                    to: r.to,
                    request_time: r.request_time,
                    return_time: r.return_time,
                    total_price: r.total_price,
                },
                car: {
                    id: r.car.id,
                    name: r.car.name,
                    image: `http://192.168.0.119:3333/uploads/${r.car.image}`,
                    type: r.car.type,
                    transmission: r.car.transmission,
                    kms: r.car.kms,
                    price: r.car.price,
                    seats: r.car.seats,
                    category: r.car.category,
                    brand: r.car.brand.name,
                },
            }));

            return rents;
        }

        return user;
    }

    public async findByEmail(email: string): Promise<User | undefined> {
        const user = await this.ormRepository.findOne({
            where: { email },
        });

        if (user?.avatar) {
            user?.avatar = `http://192.168.0.119:3333/uploads/${user.avatar}`;
        }

        return user;
    }

    public async create({
        name,
        cpf,
        email,
        password,
    }: ICreateUserDTO): Promise<User> {
        const user = this.ormRepository.create({ name, cpf, email, password });

        await this.ormRepository.save(user);

        return user;
    }
}

export default UserRepository;
