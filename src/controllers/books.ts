import Book from '../models/Book';
import { Request, Response, NextFunction } from 'express';

/**
 * Retrieves all the books
 * @param req 
 * @param res 
 * @param next 
 */
export const getAllBooks = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const books = await Book.find({})
        res.json({
            success: true,
            data: books
        })
    } catch(err) {
        console.log(err);
    }
}


/**
 * Add a new book to the database
 * @param req 
 * @param res 
 * @param next 
 */
export const addBook = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const saveBook = await Book.create(req.body);

        res.status(200).json({
            success: true,
            data: saveBook
        });
    } catch(err){
        console.log(err)
    }

}

/**
 * Finds a book by id and deletes it
 * @param req 
 * @param res 
 * @param next 
 */
export const deleteBook = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let book = await Book.findById(req.params.id);

        if(!book) {
            return "Book not found";
        }

        await book.remove();

        res.status(200).json({
            success: true,
            data: book
        })
    } catch(err){
        console.log(err);
    }
}