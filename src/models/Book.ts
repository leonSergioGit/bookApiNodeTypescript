import mongoose from 'mongoose';

const BookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please, add the name of the book you wish to add.']
    },
    author: {
        type: String,
        required: [true, 'Please, add the name of author of the book you wish to add.']
    },
    language: {
        type: String,
        required: [true, 'Please, add the language in which you read the book you wish to add']
    },
    isFinished: {
        type: String,
        required: true
    }
})

export default mongoose.model('Book', BookSchema);