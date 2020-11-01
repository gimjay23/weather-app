import React from "react";

//imported components
import NavBar from "./NavBar";
import { Container, Row, Col } from "react-bootstrap";
import storm from "../assets/storm.png";

export default function About() {
  const loggedIn = false;

  const widgetStorm = {
    backgroundColor: "inherit",
    marginTop: "50px",
    height: "200px",
    textAlign: "center",
    padding: "10px",
  };

  const myText = (
    <Container fluid>
      <Row>
        <Col md={6}>
          <div style={widgetStorm}>
            <img src={storm} alt="stormy weather" />
          </div>
        </Col>
        <Col md={6}>
          <div style={widgetStorm}>
            <h2 style={{ fontFamily: "candara" }} className="h2-font">
              THE WEATHER APP
            </h2>
            <p style={{ color: "black" }} className="p-font">
              Developed by,
            </p>
            <p style={{ color: "black" }} className="p-font">
              © 2020 Copyright •{" "}
              <a style={{ color: "white" }} rel="noopener noreferrer" href="https://www.instagram.com/kdworks/" target="_blank">
                KD WORKS LTD.
              </a>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );

  return (
    <div className="about-page">
      <NavBar loggedIn={loggedIn} />
      <br />
      {myText}
    </div>
  );
}
