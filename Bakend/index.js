import express from 'express';
import testRouter from './router/test.js'
import mongose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongose.connect(process.env.MONGO).then(()=> {
    console.log('coonect mongodb')
}) .catch ((error)=>{
    console.log(error)
})

const app = express();

app.use(express.json());
app.use('/api', testRouter)

app.listen(4000, ()=> {
 console.log('server listen port 4000');
})