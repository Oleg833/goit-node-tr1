// const main = () => {
//   console.log("Konnichiwa Oleh!!!");
// };
// main();

// const { greet } = require("./helpers/greeting");

// greet();

// const filePath = "./data.txt";

// const { appendFile, readFile, writeFile } = require("fs/promises");

// const fs = require("fs/promises");

// const fileOperation = async ({ action }) => {
//   switch (action) {
//     case "read":
//       const result = await fs.readFile(filePath, "utf-8");
//       console.log("res=", result);
//       break;
//     case "write":
//       const append = await fs.appendFile(filePath, "\n from Tomato");
//       break;
//     case "replace":
//       const replace = await fs.writeFile(filePath, "New phrase");
//       console.log("repl=", replace);
//       break;
//     case "delete":
//       const deleted = await fs.unlink(filePath);
//       console.log(deleted);
//       break;
//     default:
//       console.log("Unknown action");
//       console.warn("\x1B[31m Unknown action type!");
//       break;
//   }
// };
// fileOperation({ action: "read" });
// fileOperation({ action: "replace" });
// fileOperation({ action: "delete" });

// fileOperation({ action: "write" });
// const { readMovie } = require("./movies/readMovies");

// readMovie();

// const path = require("path");
// const filePath = path.resolve(__dirname, "db", "contacts.json");
// const filePath = path.join(__dirname, "db", "contacts.json");
// const fileJoin = path.join("db", "movie.txt");
// const textDb = path.resolve(__dirname, "data.txt");
// console.log("first = ", textDb);
// console.log("join =", filePath);

const argv = require("yargs").argv;

const { getAll, getById, add, updateById, removeById } = require("./contacts");
// getAll();
const invokeAction = async ({ action, id, title, author }) => {
  switch (action) {
    case "getAll":
      const AllBooks = await getAll();
      console.table(AllBooks);
      break;
    case "list":
      const list = await getAll();
      console.table(list);
      break;
    case "getById":
      const oneBook = await getById(id);
      console.table(oneBook);
      break;
    case "add":
      const newBook = await add({ title, author });
      console.table(newBook);
      break;
    case "updateById":
      const updatedBook = await updateById(id, { title, author });
      console.table(updatedBook);
      break;
    case "removeById":
      const removedBook = await removeById(id);
      console.table(removedBook);
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
// console.log(process.argv);

// const actionIndex = process.argv.indexOf("--action");
// if (actionIndex !== -1) {
//   const action = process.argv[actionIndex + 1];
//   invokeAction({ action });
// }

invokeAction(argv);
