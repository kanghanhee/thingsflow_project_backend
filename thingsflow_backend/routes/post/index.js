const express = require("express");
const postController = require("../../controllers/postController");
const router = express.Router();

router.get("/", postController.getAllPost);
router.post("/", postController.createPost);

module.exports = router;
