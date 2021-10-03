const express = require('express');

const PORT = 3333;
const server = express();

server.get('/', (req, res) => {
  res.send('hello world');
});
server.listen(PORT, () => console.log(`Application running at: ${PORT}`));