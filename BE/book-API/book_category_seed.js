const mongoose = require("mongoose");
const Book = require("./models/bookCategory");
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

const seedBookCategory = [
  {
    category: "fiction",
  },
  {
    category: "non-fiction",
  },
  {
    category: "horror",
  },
  {
    category: "sci-fi",
  },
  {
    category: "romance",
  },
  {
    category: "fantasy",
  },
  {
    category: "young-adult",
  },
  {
    category: "mystery",
  },
];

Book.insertMany(seedBookCategory)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
