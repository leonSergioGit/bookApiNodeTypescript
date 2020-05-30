import express, { Application, Request, Response, NextFunction } from 'express';
import Book from '../models/Book';


const api = express();
const router = express.Router();


router
    .route('/')
        .get((req, res) => {
           res.send("<h1>hola</h1>")
        })
        .post(async (req, res) => {                
                let saveBook = await Book.create(req.body);
    
                res.status(200).json({
                    success: true,
                    data: saveBook
                });
        })



export default router;