import React from "react";

//imported components
import { Link } from "react-router-dom";
import cloudy from "../assets/cloudy.png";

export default function NavBar(props) {
  //console.log(props.loggedIn);
  return (
    <div>
      
      <nav className="col-lg-12 col-md-12 navbar navbar-expand-lg navbar-light">
        <li className="navbar-brand">
          <img src={cloudy} alt="" />
        </li>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav mr-auto">
            {props.loggedIn === false && (
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
            )}

            {props.loggedIn === true ? (
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Sign Out
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  Sign Up
                </Link>
              </li>
            )}
            {props.loggedIn === false && (
              <li className="nav-item">
                <Link className="nav-link" to="/about" href="#about">
                  About
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}

// title="Sign in to view you location's weather data"
