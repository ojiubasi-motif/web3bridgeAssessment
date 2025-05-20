import express from 'express';
import cors from 'cors';
const app = express();

import dotenv from 'dotenv';
import dbConnect from './utils/dbConnect.js';
import questionsRoute from './routes/questions.js';


let PORT = process.env.PORT;

dotenv.config();
// ===connect to database
dbConnect();
// ===accept json files
app.use(express.json());
app.use(cors({credentials:true,origin:true}));

// ==register the routes
app.use('/api/v1', questionsRoute);

app.listen(PORT, ()=>{
    console.log("Backend server is running on http://localhost:"+PORT)
})