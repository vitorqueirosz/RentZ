import { Router } from 'express';
import brandRoutes from './brand.routes';
import sessionsRoutes from './sessions.routes';
import userRoutes from './user.routes';

import carRoutes from './car.routes';
import rentRoutes from './rent.routes';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/sessions', sessionsRoutes);
routes.use('/brands', brandRoutes);
routes.use('/cars', carRoutes);
routes.use('/rents', rentRoutes);

export default routes;
