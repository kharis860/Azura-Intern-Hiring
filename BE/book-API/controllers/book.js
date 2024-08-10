const Book = require("../models/book");

module.exports = {
  get: async (req, res) => {
    const search = req.query.search;
    console.log(search);
    if (search) {
      try {
        const bookTitle = await Book.find({ title: search });
        console.log(bookTitle[0], "ini var book title");
        if (!bookTitle[0]) {
          const bookTitle = await Book.find({ author: search });
          if (!bookTitle[0]) {
            const bookTitle = await Book.find({ publisher: search });
            if (!bookTitle[0]) {
              res.status(404).json({ message: "Hasil tidak ditemukan, mohon cek kembali penulisan pencarian anda (case sensitive)", data: bookTitle });
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
    console.log(req.body), "ini req body";
    const book = new Book(req.body);
    console.log(book, "ini dari backend");
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
