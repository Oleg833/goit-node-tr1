const fs = require("fs/promises");
const path = require("path");

console.log(__dirname);
console.log(__filename);

async function readMovie() {
  const filePath = path.resolve(__dirname, "movie.txt");
  const text = await fs.readFile(filePath, "utf-8");
  console.log(text);
}

module.exports = { readMovie };
