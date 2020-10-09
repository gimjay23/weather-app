import React from "react";
import NavBar from "./NavBar";
import { Form, FormControl, Button } from "react-bootstrap";
import RandomComponent from "./RandomComponent";
import Snowy from "./Snowy";

const centerStyle = {
  alignContent: "center",
  margin: "0 150px 0 150px",
};

export default function SignIn() {
  return (
    <div className="weather-page">
      <NavBar />

      <center>
        <Snowy />
        <br />
        <h3>Welcome to THE WEATHER APP</h3>
        <hr style={{ width: "40%" }} />
        <div>
          <Form style={centerStyle}>
            <FormControl type="text" placeholder="Search" />
            <br />
            <Button className="" variant="outline-light">
              Search
            </Button>
          </Form>
        </div>
        <br />
        <RandomComponent />
      </center>
    </div>
  );
}
