import express, { Application, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import connectDB from './config/db';
import books from './routes/books';


dotenv.config({ path: './config/config.env'})

connectDB();

const api = express();

api.use(express.json());

const PORT = process.env.PORT || 5000;



api.use('/api/v1/books', books);

api.listen(PORT, () => console.log('Server running'))