const Router = require("express");
const postRoutes = new Router();

const {
  getAllPosts,
  createPost,
  deletePost,
} = require("../controllers/postControllers");

postRoutes.get("allPosts", getAllPosts);
postRoutes.post("/createPost", createPost);
postRoutes.delete("/deletePost", deletePost);

module.exports = postRoutes;