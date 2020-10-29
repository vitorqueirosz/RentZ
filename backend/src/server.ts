import 'reflect-metadata';

// import 'express-async-errors';

import express, { NextFunction, Response, Request } from 'express';
import './database';

import cors from 'cors';
import AppError from './errors/AppError';
import routes from './routes';

import uploadConfig from './config/upload';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.use('/uploads', express.static(uploadConfig.directory));

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
    if (err instanceof AppError) {
        return response
            .status(err.statusCode)
            .json({ status: 'error', message: err.message });
    }

    return response
        .status(500)
        .json({ status: 'error', message: 'Internal server error' });
});

app.listen(3333, () => console.log('SERVER IS RUNNING!'));
