// const { greet } = require("./helpers/greeting.js");
// const { appendFile, readFile, writeFile } = require("fs/promises");

// greet();

// const fs = require("fs/promises");
// const filePath = "./data.txt";

// const fileOperation = async ({ action }) => {
//   switch (action) {
//     case "read":
//       const res = await fs.readFile(filePath);
//       console.log("read =", res.toString());
//       break;
//     case "rm":
//       const result = await fs.writeFile(filePath, "\n New phrase");
//       console.log("rm =", result);
//       break;
//     case "add":
//       const add = await fs.appendFile(filePath, "\n from Naruto");
//       console.log("Add = ", add);
//       break;

//     default:
//       console.log("fault operation");
//       break;
//   }
// };
// fileOperation({ action: "rm" });

// const { readMovie } = require("./movies/readMovies");

// readMovie();
// const path = require("path");
// const filePath = path.resolve(__dirname, "db", "contacts.json");
// const filePath = path.join(__dirname, "db", "contacts.json");
// const fileJoin = path.join("db", "movie.txt");
// const textDb = path.resolve(__dirname, "data.txt");
// console.log("first = ", textDb);
// console.log("join =", filePath);

const { getAll, getById, add, updateById, removeById } = require("./contacts");
// getAll();
const invokeAction = async ({ action, id, title, author }) => {
  switch (action) {
    case "getAll":
      const AllBooks = await getAll();
      console.log(AllBooks);
      break;
    case "getById":
      const oneBook = await getById(id);
      console.log("id_start=", id);
      console.log(oneBook);
      break;
    case "add":
      const newBook = await add({ title, author });
      console.log(newBook);
      break;
    case "updateById":
      const updatedBook = await updateById(id, { title, author });
      console.log(updatedBook);
      break;
    case "removeById":
      const removedBook = await removeById(id);
      console.log(removedBook);
      break;

    default:
      console.log("Unknown action");
      console.warn("\x1B[31m Unknown action type!");
      break;
  }
};
// invokeAction({ action: "getAll" });
// invokeAction({ action: "getById", id: "qdggE76Jtbfd9eWJHrssH" });
// invokeAction({ action: "add", title: "Rony two", author: "John dou" });
// invokeAction({
//   action: "updateById",
//   id: "eVLE0-oLo55JMDyKEy-qj",
//   title: "Run Away",
//   author: "Real McCoy",
// });
// invokeAction({ action: "removeById", id: "aoXlA5CAit9y1yQEAwNOR" });
console.log(process.argv);

const actionIndex = process.argv.indexOf("--action");
if (actionIndex !== -1) {
  const action = process.argv[actionIndex + 1];
  invokeAction({ action });
}
