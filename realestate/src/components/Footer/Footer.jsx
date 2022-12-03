import React from "react";

import "./footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="inner-footer">
        {/* <!--  for company name and description --> */}
        <div className="footer-items">
          <h1>Reunion</h1>
          <p>Real Estate Project of the company.</p>
        </div>

        {/* <!--  for quick links  --> */}
        <div className="footer-items">
          <h3>Quick Links</h3>
          <div className="border1"></div>
          <ul>
            <a href="#">
              <li>Home</li>
            </a>
            <a href="#">
              <li>Search</li>
            </a>
            <a href="#">
              <li>Contact</li>
            </a>
            <a href="#">
              <li>About</li>
            </a>
          </ul>
        </div>

        {/* <!--  for some other links --> */}
        <div className="footer-items">
          <h3>Real Estate Property</h3>
          <div className="border1"></div>
          <ul>
            <a href="#">
              <li>Patna</li>
            </a>
            <a href="#">
              <li>Delhi</li>
            </a>
            <a href="#">
              <li>Luckhnow</li>
            </a>
            <a href="#">
              <li>Varanasi</li>
            </a>
            <a href="#">
              <li>Mumbai</li>
            </a>
          </ul>
        </div>

        {/* <!--  for contact us info --> */}
        <div className="footer-items">
          <h3>Contact us</h3>
          <div className="border1"></div>
          <ul>
            <li>
              <i className="fa fa-user" aria-hidden="true" />
              Prakash Kumar
            </li>
            <li>
              <i className="fa fa-phone" aria-hidden="true" />
              8948038363
            </li>
            <li>
              <i className="fa fa-envelope" aria-hidden="true" />
              kumarsanju4881@gmail.com
            </li>
          </ul>

          {/* <!--   for social links --> */}
          <div className="social-media">
            <a href="https://github.com/Prakash-kumar1">
              <i className="fab fa-github" />
            </a>
            <a href="https://www.linkedin.com/in/prakash-kumar-386706242/">
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </div>

      {/* <!--   Footer Bottom start  --> */}
      <div className="footer-bottom">
        Copyright &copy; Real Estate property in 2022.
      </div>
    </div>
  );
};
