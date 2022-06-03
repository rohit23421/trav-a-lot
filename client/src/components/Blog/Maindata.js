import React from "react";

const Maindata = () => {
  return (
    <div>
      {/* the blog  */}
      <div className="blog">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog_post_container">
                {/* blog post */}
                <div className="blog_post">
                  <div className="blog_post_image">
                    <img
                      src="https://static.standard.co.uk/2022/03/04/13/annie-spratt-qyAka7W5uMY-unsplash.jpg?width=1024&auto=webp&quality=50&crop=968%3A645%2Csmart"
                      alt="https://unsplash.com/@anniespratt"
                      className="img-fluid"
                    />
                    <div className="blog_post_date d-flex flex-column align-items-center justify-content-center">
                      <div className="blog_post_day">01</div>
                      <div className="blog_post_month">Dec, 2017</div>
                    </div>
                  </div>

                  <div className="blog_post_meta">
                    <ul>
                      <li className="blog_post_meta_item">
                        <a href="">by Lore Papp</a>
                      </li>
                      <li className="blog_post_meta_item">
                        <a href="">Uncategorized</a>
                      </li>
                      <li className="blog_post_meta_item">
                        <a href="">3 Comments</a>
                      </li>
                    </ul>
                  </div>
                  <div className="blog_post_title">
                    <a href="#">Try these new dream destinations</a>
                  </div>

                  <div className="blog_post_text">
                    <p>
                      Aenean in lacus ligula. Phasellus euismod gravida eros.
                      Aenean nec ipsum aliquet, pharetra magna id, interdum
                      sapien. Etiam id lorem eu nisl pellentesque semper. Nullam
                      tincidunt metus placerat, suscipit leo ut, tempus nulla.
                      Fusce at eleifend tellus. Ut eleifend dui nunc, non
                      fermentum qua.
                    </p>
                  </div>

                  <div className="blog_post_link">
                    <a href="#">read more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maindata;
