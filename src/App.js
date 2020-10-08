import React from "react";
import "./App.css";
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';

function App() {
  return (
    <div className="main">
      <div>

        <Navbar className="nav-bar" variant="dark">
          <Navbar.Brand href="#home"><img src="https://img.icons8.com/offices/40/000000/partly-cloudy-rain.png" alt="" /></Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features" title="Sign in to view you location's weather data">Sign In</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar>
      </div>
    </div>
  );
}

export default App;
