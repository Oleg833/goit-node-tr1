const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");
const filePath = path.join("db", "contacts.json");

const updateBooks = async (books) => {
  await fs.writeFile(filePath, JSON.stringify(books, null, 2));
};

const getAll = async () => {
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
};
const getById = async (id) => {
  console.log("id_cont=", id);
  const books = await getAll();
  const result = books.find((item) => item.id === id);
  return result || null;
};
const add = async ({ title, author }) => {
  const books = await getAll();
  const newBook = {
    id: nanoid(),
    title,
    author,
  };
  books.push(newBook);
  await fs.writeFile(filePath, JSON.stringify(books, null, 2));
  // return JSON.stringify(newBook, null, 2);
  return newBook;
};
const updateById = async (id, { title, author }) => {
  const books = await getAll();
  const index = books.findIndex((item) => item.id === id);
  if (index === -1) return null;
  books[index] = { id, title, author };
  await fs.writeFile(filePath, JSON.stringify(books, null, 2));
  return books[index];
};
const removeById = async (id) => {
  const books = await getAll();
  const index = books.findIndex((item) => item.id === id);
  if (index === -1) return null;
  const [deletedElement] = books.splice(index, 1);
  // const newBooks = books.filter((book) => book.id != id);
  // updateBooks(newBooks);
  // return books[index];
  updateBooks(books);
  return deletedElement;
};

module.exports = { getAll, getById, add, updateById, removeById };
