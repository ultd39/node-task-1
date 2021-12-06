const fs = require('fs');
const csv = require('csvtojson');

const csvPath = './csv/db.csv';
const csvReadStream = fs.createReadStream(csvPath);
const csvParseParams = {
  delimiter: '\t'
};

const txtPath = './csv/db.txt';
const txtWriteStream = fs.createWriteStream(txtPath);

csvReadStream
  .pipe(csv(csvParseParams))
  .pipe(txtWriteStream);
