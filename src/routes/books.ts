import express, { Application, Request, Response, NextFunction } from 'express';
import Book from '../models/Book';
import { getAllBooks, addBook, deleteBook } from '../controllers/books';


const api = express();
const router = express.Router();


router
    .route('/')
        .get(getAllBooks)
        .post(addBook)

router
    .route('/:id')
    .delete(deleteBook)



export default router;