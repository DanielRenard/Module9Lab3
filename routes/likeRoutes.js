const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

// matches GET requests sent to /api/likes
// (the prefix from server.js)
// http://localhost:8081/api/likes = GET all likes
router.get("/", (req, res) => {
  Controllers.likeController.getLikes(res);
});

// matches POST requests sent to /api/likes/create
// http://localhost:8081/api/likes/create = POST create a new like
router.post("/create", (req, res) => {
  Controllers.likeController.createLike(req.body, res);
});

// matches PUT requests to /api/likes/123 (stores 123 in id param)
// http://localhost:8081/api/likes/:id = PUT update like by id
// router.put("/:id", (req, res) => {
//   Controllers.likeController.updateLike(req, res);
// });

// matches DELETE requests to /api/likes/123 (123 in id param)
// http://localhost:8081/api/likes/:id = DELETE destroys like by id
router.delete("/:id", (req, res) => {
  Controllers.likeController.deleteLike(req, res);
});

module.exports = router;