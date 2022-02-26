// const File = require('../models/file.model')
import express from 'express';
import multer from 'multer';

const router = express.Router();

const storage = multer.diskStorage({})

let upload = multer({
    storage
})

router.post('/upload', upload.single('myFile'), (req, res) => {
    try {
        if (!req.file)
            return res.status(400).json({ message: "A file was not provided to upload." })

            console.log(req.file)
    } catch (error) {
        console.log(error);
            return res.status(500).json({ message: "There has been an error with the server." });
    }
})

export default router