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
        <Form style={centerStyle}>
          <FormControl type="text" placeholder="Search" />
          <br />
          <Button className="" variant="outline-light">
            Search
          </Button>
        </Form>
      </div>
      <br />
    </center>
  );

  const widget = {
    backgroundColor: "inherit",
    border: "2px solid #EBE6E2",
    borderRadius: "15px",
    boxShadow: "4px 2px #636F87",
    marginTop: "5px",
    marginBottom: "5px",
    height: "200px",
    textAlign: "center",
    padding: "5px",
  };

  const myText = (
    <Container fluid>
      <Row>
        <Col md={4}>
          <div style={widget}>
            <h1 style={{ fontSize: "60px" }}><sup><img src={img} alt="weather icon" style={{width:"10%", marginRight:"20px"}}/></sup>
              {temperature}
              <sup>°</sup>C
            </h1>
            <h4>{description}</h4>
            <hr style={{ width: "40%", backgroundColor: "white" }} />
            <h6 style={{color:"#AA9AA5"}}>{time}</h6>
          </div>
        </Col>
        <Col md={4}>
          <div style={widget}>
            <h2>{location}</h2>
            <br />
            <h4>
              {region} | {country}
            </h4>
            <br />
            <p style={{color:"#AA9AA5"}}>{timezone}</p>
          </div>
        </Col>
        <Col md={4} style={{color:"#AA9AA5"}}>
          <div style={widget}>
            <h2>{pressure}</h2>
            <br />
            <h4>{humidity}</h4> 
            <br />
            <h5>{wind_speed}</h5>
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
