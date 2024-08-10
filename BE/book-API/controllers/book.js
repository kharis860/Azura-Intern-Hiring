const Book = require("../models/book");

module.exports = {
  get: async (req, res) => {
    const search = req.query.search;
    if (search) {
      try {
        const bookTitle = await Book.find({ title: search });
        if (!bookTitle[0]) {
          const bookTitle = await Book.find({ author: search });
          if (!bookTitle[0]) {
            const bookTitle = await Book.find({ publisher: search });
            if (!bookTitle[0]) {
              res.status(404).json({ message: "No results were found. Please double-check your search query (case sensitive).", data: bookTitle });
            }
            res.status(200).json({ message: "succes get data", data: bookTitle });
          }
          res.status(200).json({ message: "succes get data", data: bookTitle });
        }
        res.json({ message: "succes get data", data: bookTitle });
        res.end;
      } catch (error) {
        console.log(error);
      }
    } else {
      const book = await Book.find();
      res.status(200).json({ message: "succes get data", data: book });
    }
  },
  create: async (req, res) => {
    const book = new Book(req.body);
    await book.save();
    res.status(200).json({ message: "successful add book", data: book });
    res.end();
  },
  update: async (req, res) => {
    const id = req.params.id;
    const updatedBook = req.body;
    try {
      const book = await Book.findByIdAndUpdate(id, updatedBook, { new: true });
      if (!book) {
        return res.status(404).json({ message: "book not found" });
      }
      res.status(200).json({ message: "update success", data: book });
    } catch (error) {
      console.error(error);
    }
  },
  delete: async (req, res) => {
    const id = req.params.id;
    console.log(id);
    try {
      const book = await Book.findByIdAndDelete(id);
      console.log(book);
      if (!book) {
        return res.status(404).json({ message: "book not found" });
      }
      res.json({ message: "Delete success", data: book });
    } catch (error) {
      console.error(error);
    }
    res.end;
  },
};
