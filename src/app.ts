import express from 'express';
import fs from 'fs';
import multer from 'multer';
import {countWords,countFirstNames,successResponse,errorResponse} from './helperFunctions'

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
      cb(null, `${file.fieldname}-${Date.now()}`);
    },
  });
  const upload = multer({ storage });
const app = express();

const port = 3000;

app.post('/uploadBook', upload.single('name'), (req, res) => {
    try {
      if (!req.file) {
        throw new Error('file not found!');
      }
      const book = req.file;
      const data = fs.readFileSync(`uploads/${book.filename}`, 'utf8');
      const bookData = countWords(data);
      return successResponse(req, res, bookData);
    } catch (error) {
      return errorResponse(req, res, error.message);
    }
  });

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});