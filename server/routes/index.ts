import express from 'express';
import multer from 'multer';
import { UploadApiResponse, v2 as cloudinary } from 'cloudinary'
import File from '../models/file.model'
import https from 'https'

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

        res.status(200).json({
            id:file._id,
            downloadPageLink: `${process.env.API_BASE_ENDPOINT_CLIENT}download/${file._id}`
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "There has been an error with the server." });
    }
})

router.get('/:id',async (req, res) => {
    try {
        const id = req.params.id
        const file = await File.findById(id)
        if(!file) {
            return res.status(404).json({message:'That file does not exist'})
        }
        const { filename, format, sizeInBytes } = file
        return res.status(200).json({
            name: filename,
            format,
            sizeInBytes,
            id
        })
    } catch (error) {
        return res.status(500).json({message:'Server Error'})
    }
})

router.get('/:id/download',async (req, res) => {
    try {
        const id = req.params.id
        const file = await File.findById(id)
        if(!file) {
            return res.status(404).json({message:'That file does not exist'})
        }
        https.get(file.secure_url, (fileStream) => fileStream.pipe(res));
    } catch (error) {
        return res.status(500).json({message:'Server Error'})
    }
})

router.post('/email', async (req, res) => {
    //1. Validate Request

    //2. Check if the file exists

    //3. Create transporter

})

export default router