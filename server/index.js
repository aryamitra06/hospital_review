import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';

import hospitalsRoutes from './routes/hospitals.js'
import reviewRoutes from './routes/reviews.js'
import userRoutes from './routes/users.js'

const app = express();

//some middlewares
app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());


app.use('/', hospitalsRoutes);
app.use('/', reviewRoutes);
app.use('/', userRoutes);


const DB_URI = "mongodb://localhost:27017/hospital";
const PORT = process.env.PORT || 5000;


mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log('✅ Database connected');
})

app.listen(PORT, ()=> {
    console.log('✅ Server running');
})