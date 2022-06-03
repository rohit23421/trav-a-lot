import React from "react";

const Contact = () => (
  <div>
    <div className="home">
      <div
        className="home_background parallax-window"
        data-parallax="scroll"
        data-image-src="images/contact_background.jpg"
      ></div>
      <div className="home_content">
        <div className="home_title">contact</div>
      </div>
    </div>
    {/* contact */}
    <div className="contact_form_section">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="contact_form_container">
              <div className="contact_title text-center">get in touch</div>
              <form
                action="#"
                id="contact_form"
                className="contact_form text-center"
              >
                <input
                  type="text"
                  id="contact_form_name"
                  className="contact_form_name input_field"
                  placeholder="Name"
                  required="required"
                  data-error="Name is required."
                />
                <input
                  type="text"
                  id="contact_form_email"
                  className="contact_form_email input_field"
                  placeholder="E-mail"
                  required="required"
                  data-error="Email is required."
                />
                <input
                  type="text"
                  id="contact_form_subject"
                  className="contact_form_subject input_field"
                  placeholder="Subject"
                  required="required"
                  data-error="Subject is required."
                />
                <textarea
                  id="contact_form_message"
                  className="text_field contact_form_message"
                  name="message"
                  rows="4"
                  placeholder="Message"
                  required="required"
                  data-error="Please, write us a message."
                ></textarea>
                <button
                  type="submit"
                  id="form_submit_button"
                  className="form_submit_button button trans_200"
                >
                  send message<span></span>
                  <span></span>
                  <span></span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* About */}
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            {/* About - Image  */}

            <div className="about_image">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRUOQjjB_X8X9XO_Scm94jvlJiJcBU403omxgr3V2i6P7p7MaD"
                alt=""
              />
            </div>
          </div>

          <div className="col-lg-4">
            {/* About - Content */}

            <div className="about_content">
              <div className="logo_container about_logo">
                <div className="logo">
                  <a href="#">
                    <img
                      src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQzuY-XMotD_QvkT0HnFV4wNxR9tjMsGJXtZ7iQZfk2cD0A07jG"
                      alt=""
                      className="img-thumbnail"
                    />
                    travalot
                  </a>
                </div>
              </div>
              <p className="about_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                quis vu lputate eros, iaculis consequat nisl. Nunc et suscipit
                urna. Integer eleme ntum orci eu vehicula iaculis consequat
                nisl. Nunc et suscipit urna pretium.
              </p>
              <ul className="about_social_list">
                <li className="about_social_item">
                  <a href="#">
                    <i className="fa fa-pinterest">pinterest</i>
                  </a>
                </li>
                <li className="about_social_item">
                  <a href="#">
                    <i className="fa fa-facebook-f">facebook</i>
                  </a>
                </li>
                <li className="about_social_item">
                  <a href="#">
                    <i className="fa fa-twitter">twitter</i>
                  </a>
                </li>
                <li className="about_social_item">
                  <a href="#">
                    <i className="fa fa-dribbble">dribbble</i>
                  </a>
                </li>
                <li className="about_social_item">
                  <a href="#">
                    <i className="fa fa-behance">behance</i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3">
            {/* About Info */}

            <div className="about_info">
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
                      contactme@gmail.com
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
                    <a href="#">www.travalot.com</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="travelix_map">
      <div id="google_map" className="google_map">
        <div className="map_container">
          <div id="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d74691.11921707397!2d2.157570511755226!3d41.38096208808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a3a809389627%3A0x1e8e0ed73f4965fb!2sBarceloneta%20Beach!5e0!3m2!1sen!2sin!4v1653880773189!5m2!1sen!2sin"
              width="1260"
              height="400"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
