import express from 'express';
import mongose from 'mongoose';
import dotenv from 'dotenv';
import authRouter from './router/auth.router.js'
import cookieParser from 'cookie-parser'

dotenv.config();

mongose.connect(process.env.MONGO).then(()=> {
    console.log('coonect mongodb')
}) .catch ((error)=>{
    console.log(error)
})

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRouter);


app.use((err, req, res, next) => {
 const statusCode = err.statusCode || 500;
 const message = err.message || 'Inernal server Error';
 res.statusCode(statusCode).json({
    success: false,
    statusCode,
    message
 })
})

app.listen(4000, ()=> {
 console.log('server listen port 4000');
})