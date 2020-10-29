import { Router } from 'express';
import SessionController from '../controller/SessionsController';

const sessionController = new SessionController();

const sessionsRoutes = Router();

sessionsRoutes.post('/', sessionController.create);

export default sessionsRoutes;
