import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';
import CarController from '../controller/CarController';

const carController = new CarController();

const upload = multer(uploadConfig);

const carRoutes = Router();

carRoutes.post('/', upload.single('image'), carController.create);
carRoutes.post('/:id', carController.index);
carRoutes.get('/filters', carController.search);
carRoutes.get('/', carController.searchAll);

export default carRoutes;
