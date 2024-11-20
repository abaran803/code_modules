// // Types of streams
// readable
// writable
// duplex
// transform

const fs = require("fs");

// Take sample file of 100 mb
const readableStream = fs.createReadStream("./sample.txt");
const writableStream = fs.createWriteStream("./sample2.txt");

let spaceBetween = 100;
readableStream.on("data", (chunk) => {
  // Here setTimeout used to visually see the changing value
  setTimeout(() => {
    console.log(chunk);
    writableStream.write(chunk);
  }, spaceBetween);
  spaceBetween += 100;
});
