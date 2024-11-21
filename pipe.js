const fs = require("fs");
const zlib = require("zlib");

const gzip = zlib.createGzip();

// Take sample file of 100 mb
const readableStream = fs.createReadStream("./sample.txt");
const writableStream = fs.createWriteStream("./sample2.txt");

const writableStreamInZip = fs.WriteStream("./file.txt.gz");

readableStream.pipe(writableStream); // data from readableStream to writableStream

// Chaining with pipe, compress and write
readableStream.pipe(gzip).pipe(writableStreamInZip);
