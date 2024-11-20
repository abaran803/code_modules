const fs = require("fs/promises");

const readThisFile = async () => {
  const data = await fs.readFile("./Important.txt");
  console.log(data.toString());
  console.log(
    "----------------\n-------------------\n-----------------------\n--------------------------\n"
  );
  fs.readFile("./Important.txt")
    .then((data) => console.log(data.toString()))
    .catch((err) => console.log(err));
};

readThisFile();
