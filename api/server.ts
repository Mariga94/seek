import express from 'express';
import dotenv from "dotenv";
import { errorMiddleware, jwtMiddleware } from './middlewares/middlewares'
import cookieParser from 'cookie-parser';
import bodyParser from "body-parser";
import cors from 'cors'
// import WebSocket from 'ws'
import v1AuthRouter from './routes/v1/authRoutes'
import v1ProjectRouter from './routes/v1/projectRoutes'
import v1GigRouter from './routes/v1/gigRoutes'
import v1OrderRouter from './routes/v1/gigOrderRoutes';
import v1MessageRouter from './routes/v1/messageRoutes';
import mongoose from 'mongoose';

dotenv.config();
const app = express();
const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;
const mongoURI: string | undefined = process.env.MONGOURI || '';

if (!mongoURI || !port) {
    console.error('MongoDB URI or database name not found in env variable');
    process.exit(1)
}

const allowedOrigins = [
    'http://localhost:5173'
]
const corsOptions = {
    origin: allowedOrigins,
    optionsSuccessStatus: 200,
    credentials: true
}


app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(errorMiddleware)
app.use('/api/v1/auth', v1AuthRouter);
app.use('/api/v1/project', jwtMiddleware, v1ProjectRouter);
app.use('/api/v1/gigs', jwtMiddleware, v1GigRouter);
app.use('/api/v1/orders', jwtMiddleware, v1OrderRouter);
app.use('/api/v1/messages', jwtMiddleware, v1MessageRouter);

app.get('/', (req, res) => {
    res.send('Server is running successfully!');
});

const connectDB = async () => {
    try {
        // const client = new MongoClient(mongoURI);
        // await client.connect()
        // console.log('Connected to MongoDB database');
        // const db = client.db()
        await mongoose.connect(mongoURI)
        console.log('Connected to MongoDB database');
    } catch (error) {
        console.log('Error connecting to MongoDB', error)
    }
}
app.listen(port, () => {
    try {
        connectDB()
        console.log(`Express API running at http://localhost:${port}`)
    } catch (error) {
        console.error('Error starting server:', error)
    }
});