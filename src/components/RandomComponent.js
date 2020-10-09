import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../App.css";

function RandomComponent() {
  const widget = {
    backgroundColor: "inherit",
    border: "3px solid #EBE6E2",
    borderRadius: "15px",
    boxShadow: "4px 2px #636F87",
    marginTop: "5px",
    marginBottom: "5px",
    height: "200px",
    textAlign: "center",
    padding: "10px",
  };

  const [temp, setTemp] = useState(28.0);

  function fahrenheitToCelsius() {
    setTemp(Math.round((temp * 9) / 5 + 32));
  }

  function CelsuisToFahrenheit() {
    setTemp(Math.round(((temp - 32) * 5) / 9));
  }

  const myText = (
    <Container fluid>
      <Row>
        <Col md={6}>
          <div style={widget}>
            <h6 style={{ fontSize: "150px" }}>
              {temp}{" "}
              <NavLink to="/signin" className="temp-button" onClick={CelsuisToFahrenheit}>
                °C
              </NavLink>
              /
              <NavLink to="signin" className="temp-button" onClick={fahrenheitToCelsius}>
                F
              </NavLink>
            </h6>
          </div>
        </Col>
        <Col md={6}>
          <div style={widget}>
            <h2 className="h2-font">Accra, Ghana</h2>
            <p className="p-font">Anege Akwei Link,</p>
            <p className="p-font">Dansoman St.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );

  return <div>{myText}</div>;
}

export default RandomComponent;
