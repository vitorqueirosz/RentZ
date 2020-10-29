import ICreateBrandDTO from '../dtos/ICreateBrandDTO';
import Brand from '../models/Brand';

export default interface IBrandRepository {
    create(createBrandDTO: ICreateBrandDTO): Promise<Brand>;
    findByName(name: string): Promise<Brand | undefined>;
    findCarByBrandId(id: string): Promise<Brand | undefined>;
    findAllBrands(): Promise<Brand[] | undefined>;
}
