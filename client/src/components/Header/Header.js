import React from "react";

const Header = () => {
  return (
    <div className="App">
      <header className="header">
        <div className="top_bar">
          <div className="container">
            <div className="row">
              <div className="col d-flex flex-row">
                <div className="phone">+45 345 3324 56789</div>
                <div className="social">
                  <ul className="social_list">
                    <li className="social_list_item">
                      <a href="#">
                        <i className="fa fa-pinterest" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="social_list_item">
                      <a href="#">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="social_list_item">
                      <a href="#">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="social_list_item">
                      <a href="#">
                        <i className="fa fa-dribbble" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="social_list_item">
                      <a href="#">
                        <i className="fa fa-behance" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="social_list_item">
                      <a href="#">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="user_box ml-auto">
                  <div className="user_box_login user_box_link">
                    <a href="#">login</a>
                  </div>
                  <div className="user_box_register user_box_link">
                    <a href="#">register</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <nav>
        <div className="container">
          <div className="row">
            <div className="col main_nav_col d-flex flex-row align-items-center justify-content-start">
              <div className="logo_container">
                <div className="logo">
                  <a href="#">
                    <img src="https://technext.github.io/travelix/images/logo.png" />
                  </a>
                </div>
                <div className="main_nav_container ml-auto">
                  <ul className="main_nav_list">
                    <li className="main_nav_item">
                      <a href="#">home</a>
                    </li>
                    <li className="main_nav_item">
                      <a href="about.html">about us</a>
                    </li>
                    <li className="main_nav_item">
                      <a href="offers.html">offers</a>
                    </li>
                    <li className="main_nav_item">
                      <a href="blog.html">news</a>
                    </li>
                    <li className="main_nav_item">
                      <a href="contact.html">contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
