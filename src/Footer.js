/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { FaMapMarkerAlt , FaEnvelope, FaMobileAlt} from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">

                <div className="col-6 col-lg-3">
                  <h2>Get In Touch</h2>
                  <ul>
                    <li>
                      <a href="#"> <FaMapMarkerAlt /> 
                      {"    Khera, Near Khera Gate"}    </a>
                    </li>
                    <li>
                      <a href="#"> <FaEnvelope/> {'  '} intercollegenavbharti@gmail.com</a>
                    </li>
                    <li>
                      <a href="#"><FaMobileAlt/>8937034701 </a>
                    </li>
                    <li>
                    <a href="#"><FaMobileAlt/> 9560690117</a>

                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Quick Links</h2>
                  <ul>
                    <li>
                      <a href="http://localhost:3000/">Home</a>
                    </li>
                    <li>
                      <a href="http://localhost:3000/service">Services</a>
                    </li>
                    <li>
                      <a href="http://localhost:3000/about">About</a>
                    </li>
                    <li>
                      <a href="http://localhost:3000/contact">Contact</a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Follow Us</h2>
                  <div className="row">
                    <div className="col-3 mx-auto">
                    <a
                        href="https://www.facebook.com/"
                        target='_blank'>
                      <i class="fab fa-facebook-f fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <a
                        href="https://www.instagram.com/"
                        target='_blank'>
                        <i class="fab fa-instagram fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                    <a
                        href="https://www.twitter.com/"
                        target='_blank'>
                      <i class="fab fa-twitter fontawesome-style"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="mt-5">
                <p className="main-hero-para text-center w-100">
                  Copyright @ 2021 NavBhartiInterCollege. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
