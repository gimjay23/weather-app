import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function NavBar() {
  return (
    <div>
      <Navbar className="nav-bar" variant="dark">
        <Navbar.Brand href="#home">
          <img src="https://img.icons8.com/offices/40/000000/partly-cloudy-rain.png" alt="cloudy and rainy" />
        </Navbar.Brand>
        <Nav></Nav>
      </Navbar>
    </div>
  );
}
// title="Sign in to view you location's weather data"
