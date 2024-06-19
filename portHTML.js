//Sidebar.js

import React from "react";
import jsonData from "./Data";
import backgroundImage from './page-bg-1.jpg';
var SideBar = () => {
  let profile = jsonData[0];
  return (
    <>
     <div className="page-wrapper home-3" style={{ backgroundImage: `url(${backgroundImage})` }} >
     <div className="container z-index-3">
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-4">
        <div class="container">
       </div>
       </div>
      <div className="bostami-parsonal-info-area">
        <div className="bostami-parsonal-info-wrap">
          <div className="bostami-parsonal-info-img">
          <img src={profile.Img} alt="Person" />
          </div>

          <h4 className="bostami-parsonal-info-name">
            <a href="#">{profile.name}</a>
          </h4>
          <span className="bostami-parsonal-info-bio mb-15">
            {profile.role}
          </span>

          <ul className="bostami-parsonal-info-social-link mb-30">
            <li>
              <a href="#" className="facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#" className="twitter">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#" className="instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#" className="linkedin">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
          </ul>

          <div className="bostami-parsonal-info-contact mb-30">
            <div className="bostami-parsonal-info-contact-item phone">
              <div className="icon">
                <i className="fa-solid fa-mobile-screen-button"></i>
              </div>
              <div className="text">
                <span>Phone</span>
                {profile.phonenumber}
              </div>
            </div>

            <div className="bostami-parsonal-info-contact-item email">
              <div className="icon">
                <i className="fa-regular fa-envelope-open-text"></i>
              </div>
              <div className="text">
                <span>Email</span>
                {profile.email}
              </div>
            </div>

            <div className="bostami-parsonal-info-contact-item location">
              <div className="icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="text">
                <span>Location</span>
                {profile.location}
              </div>
            </div>

            <div className="bostami-parsonal-info-contact-item calendar">
              <div className="icon">
                <i className="fa-light fa-calendar-days"></i>
              </div>
              <div className="text">
                <span>Birthday</span>
                {profile.birthday}
              </div>
            </div>
          </div>

          <div className="bostami-parsonal-info-btn">
            <a className="btn-2 circle" href="#">
              <span className="icon">
                <i className="fa-regular fa-download"></i>
              </span>
              download cv
            </a>
          </div>
        </div>
      </div>
      </div>
      </div>
</div>

    </>
  );
};
export default SideBar;
