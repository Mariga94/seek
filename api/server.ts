import express from 'express';
import { MongoClient } from 'mongodb';
import dotenv from "dotenv";

dotenv.config(); //load variables from .env file
const app = express();
const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;
const mongoURI: string | undefined = process.env.MONGOURI!;

if (!mongoURI || !port) {
    console.error('MongoDB URI or database name not found in env variable');
    process.exit(1)
}

const connectDB = async () => {
    try {
        const client = new MongoClient(mongoURI);
        await client.connect()
        console.log('Connected to MongoDB database');

    } catch (error) {
        console.log('Error connecting to MongoDB', error)
    }
}
app.listen(port, () => {
    connectDB()
    console.log(`Server listening on ${port}`)
})