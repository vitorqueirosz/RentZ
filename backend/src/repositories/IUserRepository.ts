import User from '../models/User';

import ICreateUserDTO from '../dtos/ICreateUserDTO';

export default interface IUserRepository {
    create(createUserDTO: ICreateUserDTO): Promise<User>;
    findByEmail(email: string): Promise<User | undefined>;
    findById(id: string): Promise<User | undefined>;
    findAllRents(user_id: string): Promise<User | undefined>;
    save(user: User): Promise<User>;
}
