const fs = require("fs/promises");

const path = require("path");

async function readMovie() {
  const filePath = path.resolve(__dirname, "movie.txt");
  const fileJoin = path.join(__dirname, "movie.txt");
  console.log("Second = ", fileJoin);
  console.log("first = ", filePath);
  const text = await fs.readFile(filePath, "utf-8");
  console.log("first-2 =", text);
}

module.exports = { readMovie };

// const fs = require("fs/promises");
// const path = require("path");

// console.log(__dirname);
// console.log(__filename);

// async function readMovie() {
//   const filePath = path.resolve(__dirname, "movie.txt");
//   const text = await fs.readFile(filePath, "utf-8");
//   console.log(text);
// }

// module.exports = { readMovie };
