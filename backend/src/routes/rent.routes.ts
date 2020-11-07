import { Router } from 'express';

import RentController from '../controller/RentController';
import ensureAuhenticated from '../middlewares/ensureAuthenticated';

const rentController = new RentController();

const rentRoutes = Router();

rentRoutes.use(ensureAuhenticated);
rentRoutes.post('/', rentController.create);

export default rentRoutes;
