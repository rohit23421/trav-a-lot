import React from "react";
import Maindata from "./Maindata";
import Sidebar from "./Sidebar";

const Blog = () => {
  return (
    <div>
      <div className="home">
        <img
          className="w-50 p-1"
          src="https://daintreecapital.com.au/wp-content/uploads/2018/10/8.jpg"
        ></img>
        <div className="home_content">
          <div className="home_title">The Blog</div>
        </div>
      </div>
      <Maindata />
      <hr />
      <Maindata />
      <hr />
      <Maindata />

      {/* Sidebar */}
      <Sidebar />
    </div>
  );
};

export default Blog;
