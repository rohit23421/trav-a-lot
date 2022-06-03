import React from "react";

const About = () => {
  return (
    <div>
      <div className="home">
        <img
          src="https://rockburnpropertyservices.com/wp-content/uploads/2018/10/advent-6-1.jpg"
          className="img-thumbnail"
        />
        <div className="home_content">
          <div className="home_title">about us</div>
        </div>
      </div>

      {/* Intro  */}

      <div className="intro">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="intro_image">
                <img
                  src="https://image.shutterstock.com/image-illustration/deck-chairs-under-beach-umbrella-600w-666207415.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="intro_content">
                <div className="intro_title">we have the best tours</div>
                <p className="intro_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus quis vulputate eros, iaculis consequat nisl. Nunc et
                  suscipit urna. Integer elementum orci eu vehicula pretium.
                  Donec bibendum tristique condimentum. Aenean in lacus ligula.
                  Phasellus euismod gravida eros. Aenean nec ipsum aliquet,
                  pharetra magna id, interdum sapien. Etiam id lorem eu nisl
                  pellentesque semper. Nullam tincidunt metus placerat, suscipit
                  leo ut, tempus nulla. Fusce at eleifend tellus. Ut eleifend
                  dui nunc, non fermentum quam placerat non. Etiam venenatis
                  nibh augue, sed eleifend justo tristique eu
                </p>
                <div className="button intro_button">
                  <div className="button_bcg"></div>
                  <a href="#">
                    explore now<span></span>
                    <span></span>
                    <span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add */}

      <div className="add">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="add_container">
                <div
                  className="add_background"
                  //   style="background-image:url(images/add.jpg)"
                ></div>
                <div className="add_content">
                  <h2>
                    Displaying an add here from trav-a-lot vacation packages
                  </h2>
                  <h1 className="add_title">thailand</h1>
                  <div className="add_subtitle">
                    From <span>$999</span>
                  </div>
                  <div className="button add_button">
                    <div className="button_bcg"></div>
                    <a href="#">
                      explore now<span></span>
                      <span></span>
                      <span></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Milestones */}

      <div className="milestones">
        <div className="container">
          <div className="row">
            {/* Milestone */}
            <div className="col-lg-3 milestone_col">
              <div className="milestone text-center">
                <div className="milestone_icon">
                  <img src="images/milestone_1.png" alt="" />
                </div>
                <div className="milestone_counter" data-end-value="255">
                  0
                </div>
                <div className="milestone_text">Clients</div>
              </div>
            </div>

            {/* Milestone */}

            <div className="col-lg-3 milestone_col">
              <div className="milestone text-center">
                <div className="milestone_icon">
                  <img src="images/milestone_2.png" alt="" />
                </div>
                <div className="milestone_counter" data-end-value="1176">
                  0
                </div>
                <div className="milestone_text">Projects</div>
              </div>
            </div>

            {/* Milestone */}

            <div className="col-lg-3 milestone_col">
              <div className="milestone text-center">
                <div className="milestone_icon">
                  <img src="images/milestone_3.png" alt="" />
                </div>
                <div className="milestone_counter" data-end-value="39">
                  0
                </div>
                <div className="milestone_text">Countries</div>
              </div>
            </div>

            {/* Milestone */}

            <div className="col-lg-3 milestone_col">
              <div className="milestone text-center">
                <div className="milestone_icon">
                  <img src="images/milestone_4.png" alt="" />
                </div>
                <div className="milestone_counter" data-end-value="127">
                  0
                </div>
                <div className="milestone_text">Coffees</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
