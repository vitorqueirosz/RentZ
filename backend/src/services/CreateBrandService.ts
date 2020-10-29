import IBrandRepository from '../repositories/IBrandRepository';

import AppError from '../errors/AppError';
import Brand from '../models/Brand';

interface IRequest {
    name: string;
    image: string;
}

class CreateBrandService {
    private brandRepository: IBrandRepository;

    constructor(brandRepository: IBrandRepository) {
        this.brandRepository = brandRepository;
    }

    public async execute({ name, image }: IRequest): Promise<Brand> {
        const brandExists = await this.brandRepository.findByName(name);

        if (brandExists) {
            throw new AppError('Brand already exists', 400);
        }

        const brand = await this.brandRepository.create({
            name,
            image,
        });

        return brand;
    }
}

export default CreateBrandService;
