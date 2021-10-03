const path = require('path');
const express = require('express');

const PORT = 3333;
const server = express();

server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
});

server.listen(PORT, () => console.log(`Application running at: ${PORT}`));