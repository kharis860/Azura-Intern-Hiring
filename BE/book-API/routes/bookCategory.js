const express = require("express");
const router = express.Router();
const bookCategory = require("../controllers/bookCategory");

router.get("/", bookCategory.get);
router.post("/", bookCategory.create);
router.put("/:id", bookCategory.update);
router.delete("/:id", bookCategory.delete);

module.exports = router;
