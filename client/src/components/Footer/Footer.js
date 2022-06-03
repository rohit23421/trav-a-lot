import React from "react";

const Footerblogitem = () => (
  <div>
    <div className="footer_blog_item clearfix">
      <div className="footer_blog_image">
        <img
          src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQzuY-XMotD_QvkT0HnFV4wNxR9tjMsGJXtZ7iQZfk2cD0A07jG"
          alt="https://unsplash.com/@avidenov"
        />
      </div>
      <div className="footer_blog_content">
        <div className="footer_blog_title">
          <a href="blog.html">Travel with us this year</a>
        </div>
        <div className="footer_blog_date">Nov 29, 2017</div>
      </div>
    </div>
  </div>
);

const Footer = () => (
  <>
    <div className="container">
      <div className="row">
        {/* Footer Column */}
        <div className="col-lg-3 footer_column">
          <div className="footer_col">
            <div className="footer_content footer_about">
              <div className="logo_container footer_logo">
                <div className="logo">
                  <a href="$">
                    <img
                      src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/09/travel-logo-design.jpg"
                      alt=""
                      className="img-thumbnail"
                    />
                    trav-a-lot
                  </a>
                </div>
              </div>
              <p className="footer_about_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                quis vu lputate eros, iaculis consequat nisl. Nunc et suscipit
                urna. Integer eleme ntum orci eu vehicula pretium.
              </p>
              <ul className="footer_social_list">
                <li className="footer_social_item">
                  <a href="#">
                    <i className="fa fa-pinterest">pinterest</i>
                  </a>
                </li>
                <li className="footer_social_item">
                  <a href="#">
                    <i className="fa fa-facebook-f">facebook</i>
                  </a>
                </li>
                <li className="footer_social_item">
                  <a href="#">
                    <i className="fa fa-twitter">twitter</i>
                  </a>
                </li>
                <li className="footer_social_item">
                  <a href="#">
                    <i className="fa fa-dribbble">dribbble</i>
                  </a>
                </li>
                <li className="footer_social_item">
                  <a href="#">
                    <i className="fa fa-behance">behance</i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Column */}
        <div className="col-lg-3 footer_column">
          <div className="footer_col">
            <div className="footer_title">blog posts</div>
            <div className="footer_content footer_blog">
              {/* Footer blog item */}
              <Footerblogitem />
              <Footerblogitem />
              <Footerblogitem />
            </div>
          </div>
        </div>

        {/* Footer Column */}
        <div className="col-lg-3 footer_column">
          <div className="footer_col">
            <div className="footer_title">tags</div>
            <div className="footer_content footer_tags">
              <ul className="tags_list clearfix">
                <li className="tag_item">
                  <a href="#">design</a>
                </li>
                <li className="tag_item">
                  <a href="#">fashion</a>
                </li>
                <li className="tag_item">
                  <a href="#">music</a>
                </li>
                <li className="tag_item">
                  <a href="#">video</a>
                </li>
                <li className="tag_item">
                  <a href="#">party</a>
                </li>
                <li className="tag_item">
                  <a href="#">photography</a>
                </li>
                <li className="tag_item">
                  <a href="#">adventure</a>
                </li>
                <li className="tag_item">
                  <a href="#">travel</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Column */}
        <div className="col-lg-3 footer_column">
          <div className="footer_col">
            <div className="footer_title">Contact info</div>
            <div className="footer_content footer_contact">
              <ul className="contact_info_list">
                <li className="contact_info_item d-flex flex-row">
                  <div>
                    <div className="contact_info_icon">
                      <img src="images/placeholder.svg" alt="" />
                    </div>
                  </div>
                  <div className="contact_info_text">
                    4127 Raoul Wallenber 45b-c Gibraltar
                  </div>
                </li>
                <li className="contact_info_item d-flex flex-row">
                  <div>
                    <div className="contact_info_icon">
                      <img src="images/phone-call.svg" alt="" />
                    </div>
                  </div>
                  <div className="contact_info_text">9999-9999-9999</div>
                </li>
                <li className="contact_info_item d-flex flex-row">
                  <div>
                    <div className="contact_info_icon">
                      <img src="images/message.svg" alt="" />
                    </div>
                  </div>
                  <div className="contact_info_text">
                    <a
                      href="mailto:contactme@gmail.com?Subject=Hello"
                      target="_top"
                    >
                      contactme@travalot.com
                    </a>
                  </div>
                </li>
                <li className="contact_info_item d-flex flex-row">
                  <div>
                    <div className="contact_info_icon">
                      <img src="images/planet-earth.svg" alt="" />
                    </div>
                  </div>
                  <div className="contact_info_text">
                    <a href="#">www.trav-a-lot.com</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Footer;
