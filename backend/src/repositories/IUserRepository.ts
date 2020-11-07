import User from '../models/User';

import ICreateUserDTO from '../dtos/ICreateUserDTO';
import Rent from '../models/Rent';
import { Response } from './UserRepository';

export default interface IUserRepository {
    create(createUserDTO: ICreateUserDTO): Promise<User>;
    findByEmail(email: string): Promise<Response | undefined>;
    findById(id: string): Promise<Response | undefined>;

    findAllRents(user_id: string): Promise<User | undefined>;
    save(user: User): Promise<User>;
}
