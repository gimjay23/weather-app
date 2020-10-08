import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <Navbar className="nav-bar" variant="dark">
        <Navbar.Brand href="#home">
          <img src="https://img.icons8.com/offices/40/000000/partly-cloudy-rain.png" alt="" />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="/">
            <Nav.Link href="#home">Home</Nav.Link>
          </Link>
          <Link to="/signin">
            <Nav.Link href="#signin">
              Sign In
            </Nav.Link>
          </Link>
          <Link to="/about">
            <Nav.Link href="#about">About</Nav.Link>
          </Link>
        </Nav>
      </Navbar>
    </div>
  );
}
// title="Sign in to view you location's weather data"