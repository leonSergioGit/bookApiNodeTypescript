import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { MONGO_URI } from './configData';



dotenv.config();

const connectDB = async () => {
    const conn = await mongoose.connect(MONGO_URI, {
       useNewUrlParser: true,
       useCreateIndex: true,
       useFindAndModify: false,
       useUnifiedTopology: true 
    });

    console.log(`MongoDB connected: ${conn.connection.host}`)
}

export default connectDB;