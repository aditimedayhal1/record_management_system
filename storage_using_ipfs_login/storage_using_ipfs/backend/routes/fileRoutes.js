
const express = require('express');
const multer = require('multer');
const fileController = require('../controllers/fileController');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post('/upload', upload.single('file'), fileController.uploadFile);
router.get('/files', fileController.getFiles);

module.exports = router;

