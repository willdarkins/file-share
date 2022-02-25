import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express()

dotenv.config()

//cors middleware to communicate between front,back and db
app.use(cors());

const port = process.env.PORT

//listen call to port
app.listen(port , () => {
    console.log(`🌎 Server is running on PORT http://localhost:${port}`)
})