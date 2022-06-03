import React from "react";

export const OfferGrid = () => (
  <>
    <div className="offers_item rating_4">
      <div className="row">
        <div className="col-lg-1 temp_col"></div>
        <div className="col-lg-3 col-1680-4">
          <div className="offers_image_container">
            <img
              src="https://www.wearemarketing.com/media/cache/dynamic/rc/mlZmjT3y//uploads/media/default/0001/20/217dc4b478330022d3060fc3de93238c92325d42.jpeg"
              className="img-thumbnail"
            />
            <div className="offer_name">
              <a href="#">grand castle</a>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="offers_content">
            <div className="offers_price">
              $70<span>per night</span>
            </div>
            <div className="rating_r rating_r_4 offers_rating" data-rating="4">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </div>
            <p className="offers_text">
              Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Nullam eu convallis tortor.
              Lorem ipsum dolor sit amet.
            </p>
            <div className="offers_icons">
              <ul className="offers_icons_list">
                <li className="offers_icons_item">
                  <img src="images/post.png" alt="" />
                </li>
                <li className="offers_icons_item">
                  <img src="images/compass.png" alt="" />
                </li>
                <li className="offers_icons_item">
                  <img src="images/bicycle.png" alt="" />
                </li>
                <li className="offers_icons_item">
                  <img src="images/sailboat.png" alt="" />
                </li>
              </ul>
            </div>
            <div className="button book_button">
              <a href="#">
                book<span></span>
                <span></span>
                <span></span>
              </a>
            </div>
            <div className="offer_reviews">
              <div className="offer_reviews_content">
                <div className="offer_reviews_title">very good</div>
                <div className="offer_reviews_subtitle">100 reviews</div>
              </div>
              <div className="offer_reviews_rating text-center">8.1</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

const Offer = () => {
  return (
    <>
      <div className="home">
        <img
          className="img-fluid"
          src="https://rockburnpropertyservices.com/wp-content/uploads/2018/10/advent-6-1.jpg"
        />
        <div className="home_content">
          <div className="home_title">our offers</div>
        </div>
      </div>

      <div className="offers">
        <div className="container">
          <div className="row">
            <div className="col-lg-1 temp_col"></div>
            <div className="col-lg-11">
              {/* <!-- Offers Sorting --> */}

              <div className="offers_sorting_container">
                <ul className="offers_sorting">
                  <li>
                    <span className="sorting_text">price</span>
                    <i className="fa fa-chevron-down"></i>
                    <ul>
                      <li
                        className="sort_btn"
                        data-isotope-option='{ "sortBy": "original-order" }'
                        data-parent=".price_sorting"
                      >
                        <span>show all</span>
                      </li>
                      <li
                        className="sort_btn"
                        data-isotope-option='{ "sortBy": "price" }'
                        data-parent=".price_sorting"
                      >
                        <span>ascending</span>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span className="sorting_text">location</span>
                    <i className="fa fa-chevron-down"></i>
                    <ul>
                      <li
                        className="sort_btn"
                        data-isotope-option='{ "sortBy": "original-order" }'
                      >
                        <span>default</span>
                      </li>
                      <li
                        className="sort_btn"
                        data-isotope-option='{ "sortBy": "name" }'
                      >
                        <span>alphabetical</span>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span className="sorting_text">stars</span>
                    <i className="fa fa-chevron-down"></i>
                    <ul>
                      <li className="filter_btn" data-filter="*">
                        <span>show all</span>
                      </li>
                      <li
                        className="sort_btn"
                        data-isotope-option='{ "sortBy": "stars" }'
                      >
                        <span>ascending</span>
                      </li>
                      <li className="filter_btn" data-filter=".rating_3">
                        <span>3</span>
                      </li>
                      <li className="filter_btn" data-filter=".rating_4">
                        <span>4</span>
                      </li>
                      <li className="filter_btn" data-filter=".rating_5">
                        <span>5</span>
                      </li>
                    </ul>
                  </li>
                  <li className="distance_item">
                    <span className="sorting_text">distance from center</span>
                    <i className="fa fa-chevron-down"></i>
                    <ul>
                      <li className="num_sorting_btn">
                        <span>distance</span>
                      </li>
                      <li className="num_sorting_btn">
                        <span>distance</span>
                      </li>
                      <li className="num_sorting_btn">
                        <span>distance</span>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span className="sorting_text">reviews</span>
                    <i className="fa fa-chevron-down"></i>
                    <ul>
                      <li className="num_sorting_btn">
                        <span>review</span>
                      </li>
                      <li className="num_sorting_btn">
                        <span>review</span>
                      </li>
                      <li className="num_sorting_btn">
                        <span>review</span>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12">
              {/* <!-- Offers Grid --> */}
              <hr
                style={{
                  height: 5,
                  border: "2px solid blue",
                }}
              />
              <div className="offers_grid">
                {/* <!-- Offers Item --> */}
                <OfferGrid />
                <hr
                  style={{
                    height: 5,
                    border: "2px solid blue",
                  }}
                />
                <OfferGrid />
                <hr
                  style={{
                    height: 5,
                    border: "2px solid blue",
                  }}
                />
                <OfferGrid />
                <hr
                  style={{
                    height: 5,
                    border: "2px solid blue",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offer;
