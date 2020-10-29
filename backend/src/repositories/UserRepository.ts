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
        const user = await this.ormRepository.findOne(id);

        return user;
    }

    public async findAllRents(user_id: string): Promise<User | undefined> {
        const user = await this.ormRepository.findOne({
            where: { id: user_id },
            relations: ['rents'],
            select: ['id', 'name', 'cpf', 'email', 'level'],
        });

        return user;
    }

    public async findByEmail(email: string): Promise<User | undefined> {
        const user = await this.ormRepository.findOne({ where: { email } });

        user?.avatar = `http://192.168.0.119:3333/uploads/${user.avatar}`;

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
