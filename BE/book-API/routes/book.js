const express = require("express");
const router = express.Router();
const book = require("../controllers/book");

router.get("/", book.get);
router.post("/", book.create);
router.put("/:id", book.update);
router.delete("/:id", book.delete);

module.exports = router;
