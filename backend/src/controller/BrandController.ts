import { Request, Response } from 'express';

import BrandRepository from '../repositories/BrandRepository';

import CreateBrandService from '../services/CreateBrandService';
import FindCarService from '../services/FindCarsService';

class BrandController {
    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { name, image } = request.body;

        const brandRepository = new BrandRepository();
        const createBrandService = new CreateBrandService(brandRepository);

        const brand = await createBrandService.execute({
            name,
            image,
        });

        return response.status(201).json(brand);
    }

    public async index(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { id } = request.params;

        const brandRepository = new BrandRepository();
        const findCarsByBrand = new FindCarService(brandRepository);

        const brand = await findCarsByBrand.execute(id);

        return response.json(brand);
    }

    public async search(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const brandRepository = new BrandRepository();

        const brands = await brandRepository.findAllBrands();

        return response.json(brands);
    }
}

export default BrandController;
