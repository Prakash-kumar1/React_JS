import React from "react";
import { Outlet, Link } from "react-router-dom";

import "./header.css";

export const Header = ({ favProperty }) => {
  let favlength = favProperty.length;

  return (
    <>
      <div>
        <header>
          <div id="logo_nav">
            <div id="logo">
              <i className="fa fa-building" />
              <p>Real Estate</p>
            </div>
            <div id="navbar">
              <ul>
                <li>
                  <Link to={"/"} id="link">
                    Rent
                  </Link>
                </li>
                <li>Buy</li>
                <li>Sell</li>
                <li>
                  Manage Property <i className="fa fa-angle-down" />
                </li>
                <li>
                  Resources <i className="fa fa-angle-down" />
                </li>
              </ul>
            </div>
          </div>

          <div id="credential">
            <button>Log In</button>
            <button>Sign Up</button>
            <Link to={"page"}>
              <button id="fevorite_icon">
                <i className="fa fa-heart-o" />
                <sup>{favlength}</sup>
              </button>
            </Link>
          </div>
        </header>
      </div>
      <Outlet />
    </>
  );
};
