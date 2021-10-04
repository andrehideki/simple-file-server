const path = require('path');
const express = require('express');
const fileUpload = require('express-fileupload');
const { fileLogger } = require('./logger');

const PORT = 3333;
const DIRECTORY = 'C:/sfs_files';
const server = express();

console.log('fileLogger', fileLogger)


server.use(fileUpload());

server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
});

server.post('/upload', (req, res) => {
  const files = req.files;
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }
  const currentFile = files.file;
  const uploadFile = `${DIRECTORY}/${currentFile.name}`;
  currentFile.mv(uploadFile, (err) => {
    if (err) {
      fileLogger('Error ' + err);
      res.status(400).send('Error uploading file');
      return;
    } 
    fileLogger(currentFile.name);
    res.status(201).send('ok');
  });
});

server.listen(PORT, () => console.log(`Application running at: ${PORT}`));