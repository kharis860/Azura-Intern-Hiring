const mongoose = require("mongoose");

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

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publication_date: {
    type: Date,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  number_of_page: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    enum: ["fiction", "non-fiction", "horror", "sci-fi", "romance", "fantasy", "young-adult", "mystery"],
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
