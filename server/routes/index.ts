import express from 'express';
import multer from 'multer';
import { UploadApiResponse, v2 as cloudinary } from 'cloudinary'
import File from '../models/file.model'

const router = express.Router();

const storage = multer.diskStorage({})

let upload = multer({
    storage
})

router.post('/upload', upload.single('myFile'), async (req, res) => {
    try {
        if (!req.file)
            return res.status(400).json({ message: "A file was not provided to upload." })
        console.log(req.file)
        let uploadedFile: UploadApiResponse
        try {
            uploadedFile = await cloudinary.uploader.upload(req.file.path, {
                folder: 'Darkins_Folder',
                resource_type: 'auto'
            })
        } catch (error) {
            console.log(error);
            return res.status(400).json({ message: "Cloudinary Error." })
        }

        const { originalname } = req.file;
        const { secure_url, bytes, format } = uploadedFile

        const file = await File.create({
            filename: originalname,
            sizeInBytes: bytes,
            secure_url,
            format
        })

        res.status(200).json(file)
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "There has been an error with the server." });
    }
})

export default router