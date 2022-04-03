const Blog = require("../models/blog");

exports.createBlog = async (req, res) => {
  const newBlog = new Blog(req.body);
  try {
    const savedBlog = await newBlog.save();
    return res.status(200).json({
      success: true,
      savedBlog,
    });
  } catch (error) {
    return res.status(400).json({
      message: "ERROR IN CREATING BLOG",
      error,
    });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      updatedBlog,
    });
  } catch (error) {
    return res.status(400).json({
      message: "ERROR IN UPDATING BLOG",
      error,
    });
  }
};

exports.getSingleBlog = async (req, res) => {
  try {
    const singleBlog = await Blog.findById(req.params.id);
    return res.status(200).json({
      success: true,
      singleBlog,
    });
  } catch (error) {
    return res.status(400).json({
      message: "ERROR IN GETTING SINGLE BLOG",
      error,
    });
  }
};

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ _id: -1 });
    return res.status(200).json({
      success: true,
      blogs,
    });
  } catch (error) {
    return res.status(400).json({
      message: "ERROR IN GETTING ALL BLOGS",
      error,
    });
  }
};

exports.deleteSingleBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      success: true,
      message: "BLOG DELETED SUCCESSFULLY",
    });
  } catch (error) {
    return res.status(400).json({
      message: "ERROR IN DELETING SINGLE BLOG",
      error,
    });
  }
};
