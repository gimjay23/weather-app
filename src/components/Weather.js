import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

import "../App.css";

function Weather(props) {
  const {
    location,
    region,
    country,
    time,
    timezone,
    img,
    temperature,
    pressure,
    humidity,
    description,
    wind_speed,
  } = props.weatherData;

  const centerStyle = {
    alignContent: "center",
    margin: "0 150px 0 150px",
  };

  const mySearch = (
    <center>
      <br />
      <h3>Welcome to THE WEATHER APP</h3>
      <hr style={{ width: "40%" }} />
      <div>
        <Form style={centerStyle} onSubmit= {(e) => props.changeWeather(e)}>
          <FormControl type="text" placeholder="Enter Your Location" onChange={(e) => props.changeRegion(e.target.value)}/>
          <br />
          <Button className="" variant="outline-light" onClick= {(e) => props.changeWeather(e)}>
            SUBMIT
          </Button>
        </Form>
      </div>
      <br />
    </center>
  );

  const widget = {
    backgroundColor: "inherit",
    borderRadius: "15px",
    boxShadow: "4px 2px #fff",
    marginTop: "5px",
    marginBottom: "5px",
    height: "200px",
    textAlign: "center",
    padding: "5px",
    color: "#fff"
  };

  const myText = (
    <Container fluid>
      <Row>
        <Col md={4}>
          <div style={widget}>
            <h1 style={{ fontSize: "60px" }}>
              <sup>
                <img src={img} alt="weather icon" style={{ width: "10%", marginRight: "20px" }} />
              </sup>
              {temperature}
              <sup>°</sup>C
            </h1>
            <h4>{description}</h4>
            <hr style={{ width: "40%", backgroundColor: "white" }} />
            <h6>
              <span>Updated at:</span> {time}
            </h6>
          </div>
        </Col>
        <Col md={4}>
          <div style={widget}>
            <h2>
              <span>Location:</span> {location}
            </h2>
            <br />
            <h4>
              <span>Region:</span> {region} | <span>Country:</span> {country}
            </h4>
            <br />
            <p>
              <span>Time Zone:</span> {timezone}
            </p>
          </div>
        </Col>
        <Col md={4}>
          <div style={widget}>
            <h4>
              <span>Pressure(mbar)</span>: {pressure}
            </h4>
            <br />
            <h4>
              <span>Humidity(%):</span> {humidity}
            </h4>
            <br />
            <h5>
              <span>Wind Speed(km/hr):</span> {wind_speed}
            </h5>
          </div>
        </Col>
      </Row>
    </Container>
  );

  return (
    <div>
      {mySearch}
      <br />
      {myText}
    </div>
  );
}

export default Weather;
