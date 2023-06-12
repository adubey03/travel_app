import React from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelopeOpen,
  FaTelegramPlane,
} from "react-icons/fa";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import "./../styles/Footer.css";
import bd3 from "./../assets/bd3.png";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-cta pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <FaMapMarkerAlt />
                <div className="cta-text">
                  <h4>Find us</h4>
                  <span> Bangalore</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <FaPhone />
                <div className="cta-text">
                  <h4>Call us</h4>
                  <span>+91 0990909090</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <FaEnvelopeOpen />
                <div className="cta-text">
                  <h4>Mail us</h4>
                  <span>mail@info.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-content pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a>
                    <img src={bd3} className="img-fluid" alt="logo" />
                  </a>
                </div>
                <div className="footer-text">
                  <p>
                    Unlock Your Adventure: Discover the World with Our Travel
                    Agency!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Tour Packages</a>
                  </li>
                  <li>
                    <a href="#">Blogs</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Follow Us</h3>
                </div>
                <div className="footer-text mb-25">
                  <p>
                    Follow us on
                    Facebook, Instagram, and Twitter for breathtaking travel
                    photos, insider tips, and engaging travel stories. Join our
                    online community and let's ignite your wanderlust together!"
                  </p>
                </div>
                <div className="footer-social-icon">
                  <a href="#">
                    <FiFacebook className="facebook-bg" />
                  </a>
                  <a href="#">
                    <FiInstagram className="instagram-bg" />
                  </a>
                  <a href="#">
                    <FiTwitter className="twitter-bg" />
                  </a>
                  
                  {/* <a style={{color:'red', textDecoration:'none'}} href="/contactUs">Click here</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 text-center text-lg-center text-md-center text-sm-center">
              <div className="copyright-text">
                <p>
                  Copyright &copy; 2023, All Right Reserved{" "}
                  <a href="/">Birds Vaccation</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
