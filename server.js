const path = require('path');
const express = require('express');
const fileUpload = require('express-fileupload');

const PORT = 3333;
const server = express();

server.use(fileUpload());

server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
});

server.post('/upload', (req, res) => {
  const files = req.files;
  console.log('here', files);
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }
});

server.listen(PORT, () => console.log(`Application running at: ${PORT}`));