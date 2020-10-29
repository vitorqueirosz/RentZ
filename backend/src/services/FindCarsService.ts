import IBrandRepository from '../repositories/IBrandRepository';

import AppError from '../errors/AppError';
import Brand from '../models/Brand';

class FindCarService {
    private brandRepository: IBrandRepository;

    constructor(brandRepository: IBrandRepository) {
        this.brandRepository = brandRepository;
    }

    public async execute(id: string): Promise<Brand | undefined> {
        const brandExists = await this.brandRepository.findCarByBrandId(id);

        if (!brandExists) {
            throw new AppError('Brand not found', 400);
        }

        return brandExists;
    }
}

export default FindCarService;
