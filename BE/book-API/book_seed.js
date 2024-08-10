const mongoose = require("mongoose");
const Book = require("./models/book");
// db connect
mongoose
  .connect("mongodb://127.0.0.1/book_db")
  .then((result) => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });
// db connect

const seedBook = [
  {
    title: "The Great Gatsby",
    author: "Scott Fitzgerald",
    publication_date: "1925-04-10",
    publisher: "Charles Scribner's Sons",
    number_of_page: 218,
    category: "fiction",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Nelle Harper Lee",
    publication_date: "1960-07-11",
    publisher: "J.B. Lippincott & Co.",
    number_of_page: 336,
    category: "fiction",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    publication_date: "1813-01-28",
    publisher: "T. Egerton",
    number_of_page: 278,
    category: "romance",
  },
  {
    title: "The Lord of the Rings",
    author: "John Ronald Reuel Tolkien",
    publication_date: "1954-07-29",
    publisher: "Allen & Unwin",
    number_of_page: 1198,
    category: "fantasy",
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    publication_date: "1979-10-12",
    publisher: "Pan Books",
    number_of_page: 212,
    category: "sci-fi",
  },
  {
    title: "The Shining",
    author: "Stephen King",
    publication_date: "1977-01-28",
    publisher: "Doubleday",
    number_of_page: 447,
    category: "horror",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    publication_date: "1988-09-22",
    publisher: "HarperCollins",
    number_of_page: 198,
    category: "fiction",
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    publication_date: "2011-09-14",
    publisher: "Harvill Secker",
    number_of_page: 464,
    category: "non-fiction",
  },
  {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    publication_date: "2008-09-14",
    publisher: "Scholastic Press",
    number_of_page: 374,
    category: "young-adult",
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "Joanne Rowling",
    publication_date: "1997-06-26",
    publisher: "Scholastic",
    number_of_page: 306,
    category: "fantasy",
  },
  {
    title: "The Diary of a Young Girl",
    author: "Anne Frank",
    publication_date: "1947-03-03",
    publisher: "Contact Publishing Company",
    number_of_page: 256,
    category: "non-fiction",
  },
  {
    title: "The Catcher in the Rye",
    author: "Jerome David Salinger",
    publication_date: "1951-07-27",
    publisher: "Little, Brown and Company",
    number_of_page: 224,
    category: "fiction",
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    publication_date: "2003-03-18",
    publisher: "Doubleday",
    number_of_page: 454,
    category: "mystery",
  },
];

Book.insertMany(seedBook)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
