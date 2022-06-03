import React from "react";
import { OfferGrid } from "../Offers/Offers";

const IntroItemHelper = () => (
  <>
    <div className="col-lg-4 intro_col">
      <div className="intro_item">
        <div className="intro_item_overlay"></div>
        <img
          className="intro_item_background"
          // style="background-image:url(images/intro_3.jpg)"
          src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRNTRYZ7NbT7-446FXLmPw4g13BvxC7NPjbn0SP0-Wn8Dm6ulHo"
        />
        <div className="intro_item_content d-flex flex-column align-items-center justify-content-center">
          <div className="intro_date">May 25th - June 01st</div>
          <div className="button intro_button">
            <div className="button_bcg"></div>
            <a href="#">
              see more<span></span>
              <span></span>
              <span></span>
            </a>
          </div>
          <div className="intro_center text-center">
            <h1>Scotland</h1>
            <div className="intro_price">From $1450</div>
            <div className="rating rating_4">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

const TestimonialItem = () => (
  <>
    <div className="owl-item">
      <div className="test_item">
        <div className="test_image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcVZsO95iWBVtsfHlJscVAR6tNd91yLUVZPP2Dnt1RfS_F2qPd"
            alt=""
          />
        </div>
        <div className="test_icon">
          <img src="images/backpack.png" alt="" />
        </div>
        <div className="test_content_container">
          <div className="test_content">
            <div className="test_item_info">
              <div className="test_name">carla smith</div>
              <div className="test_date">May 24, 2017</div>
            </div>
            <div className="test_quote_title">" Best holliday ever "</div>
            <p className="test_quote_text">
              Nullam eu convallis tortor. Suspendisse potenti. In faucibus massa
              arcu, vitae cursus mi hendrerit nec.
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
);

const TrendingItemHelper = () => (
  <>
    <div className="col-lg-3 col-sm-6">
      <div className="trending_item clearfix">
        <div className="trending_image">
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS1_v8MiVflN_mMJr8YTtfRWs7RwH1uLUgomGq46Q2Y0q143ICw"
            alt="https://unsplash.com/@fransaraco"
          />
        </div>
        <div className="trending_content">
          <div className="trending_title">
            <a href="#">grand hotel</a>
          </div>
          <div className="trending_price">From $182</div>
          <div className="trending_location">madrid, spain</div>
        </div>
      </div>
    </div>
  </>
);

const Home = () => {
  return (
    <div>
      <div className="intro">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="intro_title text-center">
                We have the best tours
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="intro_text text-center">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam eu convallis tortor. Suspendisse potenti. In faucibus
                  massa arcu, vitae cursus mi hendrerit nec.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row intro_items">
            {/* <!-- Intro Item --> */}
            <IntroItemHelper />
            <IntroItemHelper />
            <IntroItemHelper />
          </div>
        </div>
      </div>

      <hr />
      <div className="cta">
        <img
          className="cta_background"
          src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTk4HUWgU0jo5wvJpUsn4i3KviFzXu8PEDl6_siBHCE_ajF4ob0"
        />

        <div className="container">
          <div className="row">
            <div className="col">
              {/* <!-- CTA Slider Item --> */}
              <div className="owl-item cta_item text-center">
                <div className="cta_title">maldives deluxe package</div>
                <div className="rating_r rating_r_4">
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
                <p className="cta_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam eu convallis tortor. Suspendisse potenti. In faucibus
                  massa arcu, vitae cursus mi hendrerit nec. Proin bibendum,
                  augue faucibus tincidunt ultrices, tortor augue gravida
                  lectus, et efficitur enim justo vel ligula.
                </p>
                <div className="button cta_button">
                  <div className="button_bcg"></div>
                  <a href="#">
                    book now<span></span>
                    <span></span>
                    <span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* OFFERS */}
      <OfferGrid />

      {/* Testimonials */}

      <div className="testimonials">
        <div className="test_border"></div>
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h2 className="section_title">what our clients say about us</h2>
            </div>
          </div>
          <div className="row">
            <div className="col">
              {/* <!-- Testimonials Slider --> */}

              <div className="test_slider_container">
                <div className="owl-carousel owl-theme test_slider">
                  {/* <!-- Testimonial Item --> */}
                  <TestimonialItem />
                  <TestimonialItem />
                  <TestimonialItem />

                  {/* <!-- Testimonials Slider Nav - Prev --> */}
                  <div className="test_slider_nav test_slider_prev">
                    <svg
                      version="1.1"
                      id="Layer_6"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      width="28px"
                      height="33px"
                      viewBox="0 0 28 33"
                      enableBackground="new 0 0 28 33"
                      xmlSpace="preserve"
                    >
                      <defs>
                        <linearGradient id="test_grad_prev">
                          <stop offset="0%" stopColor="#fa9e1b" />
                          <stop offset="100%" stopColor="#8d4fff" />
                        </linearGradient>
                      </defs>
                      <path
                        className="nav_path"
                        fill="#F3F6F9"
                        d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z
                        M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571
                        C22.545,2,26,5.541,26,9.909V23.091z"
                      />
                      <polygon
                        className="nav_arrow"
                        fill="#F3F6F9"
                        points="15.044,22.222 16.377,20.888 12.374,16.885 16.377,12.882 15.044,11.55 9.708,16.885 11.04,18.219 
                        11.042,18.219 "
                      />
                    </svg>
                  </div>

                  {/* <!-- Testimonials Slider Nav - Next --> */}
                  <div className="test_slider_nav test_slider_next">
                    <svg
                      version="1.1"
                      id="Layer_7"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      width="28px"
                      height="33px"
                      viewBox="0 0 28 33"
                      enableBackground="new 0 0 28 33"
                      xmlSpace="preserve"
                    >
                      <defs>
                        <linearGradient id="test_grad_next">
                          <stop offset="0%" stopColor="#fa9e1b" />
                          <stop offset="100%" stopColor="#8d4fff" />
                        </linearGradient>
                      </defs>
                      <path
                        className="nav_path"
                        fill="#F3F6F9"
                        d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z
                      M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571
                      C22.545,2,26,5.541,26,9.909V23.091z"
                      />
                      <polygon
                        className="nav_arrow"
                        fill="#F3F6F9"
                        points="13.044,11.551 11.71,12.885 15.714,16.888 11.71,20.891 13.044,22.224 18.379,16.888 17.048,15.554 
                      17.046,15.554 "
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TRENDING NOW */}
      <div className="trending">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h2 className="section_title">trending now</h2>
            </div>
          </div>
          <div className="row trending_container">
            {/* <!-- Trending Item --> */}
            <TrendingItemHelper />
            <TrendingItemHelper />
            <TrendingItemHelper />
            <TrendingItemHelper />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
