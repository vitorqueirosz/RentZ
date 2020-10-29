import { Router } from 'express';

import RentController from '../controller/RentController';

const rentController = new RentController();

const rentRoutes = Router();

rentRoutes.post('/', rentController.create);

export default rentRoutes;
