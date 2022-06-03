import React from "react";

const Sidebarposts = () => {
  return (
    <div>
      <li className="latest_post clearfix">
        <div className="latest_post_image">
          <a href="#">
            <img
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTcCYsnpZfHXJlQ1h0uAfzfXtTYukGryUu5KckeKUfjzwQK8Ttg"
              alt=""
              className="img-thumbnail"
            />
          </a>
        </div>

        <div className="latest_post_content">
          <div className="latest_post_title trans_200">
            <a href="#">A simple blog post</a>
          </div>
          <div className="latest_post_meta">
            <div className="latest_post_author trans_200">
              <a href="#">by Jane Smith</a>
            </div>
            <div className="latest_post_date trans_200">
              <a href="#">Aug 25, 2016</a>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};

const SidebarGallery = () => (
  <div className="sidebar_gallery">
    <div className="sidebar_title">Instagram</div>
    <div className="gallery_container">
      <ul className="gallery_items d-flex flex-row align-items-start justify-content-between flex-wrap">
        <SidebarGalleryhelper />
        <SidebarGalleryhelper />
        <SidebarGalleryhelper />
      </ul>
    </div>
  </div>
);

const SidebarGalleryhelper = () => (
  <>
    <li className="gallery_item">
      <a
        className="colorbox"
        href="https://images.unsplash.com/photo-1473625247510-8ceb1760943f?ixlib=rb-0.3.5&s=c0996cd16eda8c6f54c398de02d03cd3&auto=format&fit=crop&w=720&q=80"
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvU-Z4veTnla5nb12Tub8RYBxKramscu3A7Ser5bOSqPKhyugR"
          alt="https://unsplash.com/@mantashesthaven"
        />
      </a>
    </li>
  </>
);

const Sidebar = () => {
  return (
    <div className="col-lg-4 sidebar_col">
      <div className="sidebar_search">
        <form action="#">
          <input
            id="sidebar_search_input"
            type="search"
            className="sidebar_search_input"
            placeholder=""
            required="required"
          />
          <button
            id="sidebar_search_button"
            type="submit"
            className="sidebar_search_button trans_300"
            value="Submit"
          >
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="17px"
              height="17px"
              viewBox="0 0 512 512"
              enableBackground="new 0 0 512 512"
              xmlSpace="preserve"
            >
              <g>
                <g>
                  <g>
                    <path
                      className="mag_glass"
                      fill="#FFFFFF"
                      d="M78.438,216.78c0,57.906,22.55,112.343,63.493,153.287c40.945,40.944,95.383,63.494,153.287,63.494
												s112.344-22.55,153.287-63.494C489.451,329.123,512,274.686,512,216.78c0-57.904-22.549-112.342-63.494-153.286
												C407.563,22.549,353.124,0,295.219,0c-57.904,0-112.342,22.549-153.287,63.494C100.988,104.438,78.439,158.876,78.438,216.78z
												M119.804,216.78c0-96.725,78.69-175.416,175.415-175.416s175.418,78.691,175.418,175.416
												c0,96.725-78.691,175.416-175.416,175.416C198.495,392.195,119.804,313.505,119.804,216.78z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      className="mag_glass"
                      fill="#FFFFFF"
                      d="M6.057,505.942c4.038,4.039,9.332,6.058,14.625,6.058s10.587-2.019,14.625-6.058L171.268,369.98
												c8.076-8.076,8.076-21.172,0-29.248c-8.076-8.078-21.172-8.078-29.249,0L6.057,476.693
												C-2.019,484.77-2.019,497.865,6.057,505.942z"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </button>
        </form>
      </div>

      {/* sidebar archives */}
      <div className="sidebar_archives">
        <div className="sidebar_title">Archives</div>
        <div className="sidebar_list">
          <ul>
            <li>
              <a href="#">March 2017</a>
            </li>
            <li>
              <a href="#">April 2017</a>
            </li>
            <li>
              <a href="#">May 2017</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Sidebar Archives */}
      <div className="sidebar_categories">
        <div className="sidebar_title">Categories</div>
        <div className="sidebar_list">
          <ul>
            <li>
              <a href="#">Travel</a>
            </li>
            <li>
              <a href="#">Exotic Destinations</a>
            </li>
            <li>
              <a href="#">City Breaks</a>
            </li>
            <li>
              <a href="#">Travel Tips</a>
            </li>
            <li>
              <a href="#">Lifestyle & Travel</a>
            </li>
            <li>
              <a href="#">City Breaks</a>
            </li>
            <li>
              <a href="#">Uncategorized</a>
            </li>
          </ul>
        </div>
      </div>

      {/* sidebar latest posts */}
      <div className="sidebar_latest_posts">
        <div className="sidebar_title">Latest Posts</div>
        <div className="latest_posts_container">
          <ul>
            <Sidebarposts />
            {/* more posts */}

            <SidebarGallery />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
