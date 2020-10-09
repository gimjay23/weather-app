import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <Navbar className="nav-bar" variant="dark">
        <Navbar.Brand href="#home">
          <img src="https://img.icons8.com/offices/40/000000/partly-cloudy-rain.png" alt="cloudy and rainy" />
        </Navbar.Brand>
        <Nav>
          <NavLink className="nav-link" exact to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/signin">
            Sign In
          </NavLink>
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
        </Nav>
      </Navbar>
    </div>
  );
}
// title="Sign in to view you location's weather data"
