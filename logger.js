const fs = require('fs');
const FILE_PATH = 'sfs.log';

const fileLogger = (msg) => {
  fs.appendFile(FILE_PATH, `${new Date().toISOString()}:\t${msg}\n\n`, () => {});
}

module.exports = {
  fileLogger
};