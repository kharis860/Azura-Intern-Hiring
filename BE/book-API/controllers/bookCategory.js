const BookCategory = require("../models/bookCategory");

module.exports = {
  get: async (req, res) => {
    const bookCategory = await BookCategory.find();
    res.status(200).json({ message: "succes get data", data: bookCategory });
    res.end;
  },
  create: async (req, res) => {
    const bookCategory = new BookCategory(req.body);
    await bookCategory.save();
    res.status(200).json({ message: "successful add book category", data: bookCategory });
    res.end();
  },
  update: async (req, res) => {
    const id = req.params.id;
    const updatedBookCategory = req.body;
    try {
      const bookCategory = await BookCategory.findByIdAndUpdate(id, updatedBookCategory, { new: true });
      if (!bookCategory) {
        return res.status(404).json({ message: "book not found" });
      }
      res.status(200).json({ message: "update success", data: bookCategory });
    } catch (error) {
      console.error(error);
    }
  },
  delete: async (req, res) => {
    const id = req.params.id;
    console.log(id);
    try {
      const bookCategory = await BookCategory.findByIdAndDelete(id);
      console.log(bookCategory);
      if (!bookCategory) {
        return res.status(404).json({ message: "book not found" });
      }
      res.status(200).json({ message: "Delete success", data: bookCategory });
    } catch (error) {
      console.error(error);
    }
    res.end;
  },
};
