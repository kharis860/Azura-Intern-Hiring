var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Book API" });
});
router.use("/book", require("./book"));
router.use("/book-category", require("./bookCategory"));

module.exports = router;
