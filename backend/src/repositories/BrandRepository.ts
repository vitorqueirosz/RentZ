import { getRepository, Repository } from 'typeorm';
import Brand from '../models/Brand';
import IBrandRepository from './IBrandRepository';

import ICreateBrandDTO from '../dtos/ICreateBrandDTO';
import Car from '../models/Car';

class BrandRepository implements IBrandRepository {
    private ormRepository: Repository<Brand>;

    constructor() {
        this.ormRepository = getRepository(Brand);
    }

    public async findAllBrands(): Promise<Brand[] | undefined> {
        const brands = await this.ormRepository.find({
            relations: ['cars'],
            select: ['id', 'name', 'image'],
        });

        return brands;
    }

    public async findCarByBrandId(id: string): Promise<Brand | undefined> {
        const brand = await this.ormRepository.findOne({
            where: { id },
            relations: ['cars'],
        });

        brand?.cars = brand?.cars.map(c => ({
            ...c,
            brand: brand.name,
            image: `http://192.168.0.119:3333/uploads/${c.image}`,
        }));

        return brand;
    }

    public async create({ name, image }: ICreateBrandDTO): Promise<Brand> {
        const brand = this.ormRepository.create({
            name,
            image,
        });

        await this.ormRepository.save(brand);

        return brand;
    }

    public async findByName(name: string): Promise<Brand | undefined> {
        const brand = await this.ormRepository.findOne({ where: { name } });

        return brand;
    }
}

export default BrandRepository;
