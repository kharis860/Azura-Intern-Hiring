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
const bookCategorySchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
});

const BookCategory = mongoose.model("BookCategory", bookCategorySchema);

module.exports = BookCategory;
