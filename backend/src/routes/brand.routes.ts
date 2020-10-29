import { Router } from 'express';
import BrandController from '../controller/BrandController';

const brandController = new BrandController();

const brandRoutes = Router();

brandRoutes.post('/', brandController.create);
brandRoutes.post('/:id', brandController.index);
brandRoutes.get('/', brandController.search);

export default brandRoutes;
