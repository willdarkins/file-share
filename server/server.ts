import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express()
const PORT = process.env.PORT

dotenv.config()

app.use(cors());

app.listen(PORT , () => {
    console.log(`🌎 Server is running on PORT ${PORT}`)
})