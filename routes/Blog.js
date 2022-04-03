const router = require("express").Router();

const {
  createBlog,
  updateBlog,
  getSingleBlog,
  getAllBlogs,
  deleteSingleBlog,
} = require("../controllers/blogController");

router.route("/createblog").post(createBlog);
router.route("/updateblog").put(updateBlog);
router.route("/getsingleblog").get(getSingleBlog);
router.route("/getallblogs").get(getAllBlogs);
router.route("/deletesingleblog").delete(deleteSingleBlog);

module.exports = router;
