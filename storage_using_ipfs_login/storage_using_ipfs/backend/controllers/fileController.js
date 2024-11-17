
const ipfs = require('../config/ipfs');
const File = require('../models/File');
const { Readable } = require('stream');

exports.uploadFile = async (req, res) => {
    try {
        const file = req.file;
        const fileStream = Readable.from(file.buffer);

        const result = await ipfs.add(fileStream);
        
        const newFile = new File({
            cid: result.path,
            name: file.originalname,
            size: file.size
        });

        await newFile.save();

        res.status(200).json({ 
            cid: result.path,
            name: file.originalname,
            size: file.size
        });
    } catch (error) {
        console.error('File upload error:', error);
        res.status(500).json({ error: 'File upload failed', details: error.message });
    }
};

exports.getFiles = async (req, res) => {
    try {
        const files = await File.find();
        res.json(files);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching files' });
    }
};
