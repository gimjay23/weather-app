import React, { useState } from "react";
//import useLocalStorageState from "use-local-storage-state";
//imported components
import "../App.css";
import { Form, FormControl, Button, NavLink } from "react-bootstrap"; //Container, Row, Col, to add if needed
import NavBar from "./NavBar";
//import SavedSearches from "./SavedSearches";

function Weather(props) {
  //console.log(props.weatherData);
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

  //Variable temp
  const [temp, setTemp] = useState(temperature);

  //function for variable temp
  function CelsuisToFahrenheit() {
    setTemp(Math.round(((temperature - 32) * 5) / 9));
  }

  //variable mySearch
  const mySearch = (
    <>
      <div>
        <center>
          <br />
          <h3>Welcome to THE WEATHER APP</h3>
          <br />
          <br />
          <br />
          <Form onSubmit={(e) => props.changeWeather(e)}>
            <FormControl
              className="search-bar text-center"
              type="text"
              placeholder="Enter Your Location"
              onChange={(e) => props.changeRegion(e.target.value)}
            />
            <br />
            <Button className="" variant="outline-light" onClick={(e) => props.changeWeather(e)}>
              SUBMIT
            </Button>
          </Form>
        </center>
      </div>
      <br />
    </>
  );

  //variable myText
  const myText = (
    <div className="container-fluid" style={{ marginTop: "80px" }}>
      <div className="row pt-3">
        <div className="col-md-4 my-1 text-center">
          <div className="px-3 py-2 mx-1 w-box">
            <sup>
              <img
                src={img}
                alt="weather icon"
                style={{ width: "8%", marginRight: "20px", marginTop: "-40px" }}
              />
            </sup>
            <h1 style={{ fontSize: "80px" }}>
              {temperature}
              <sup>°</sup>C |{" "}
              <NavLink className="t-link" onClick={CelsuisToFahrenheit}>
                <h1>F{temp}</h1>
              </NavLink>{" "}
              {/**to change on load instead of click*/}
            </h1>
            <hr style={{ width: "40%", backgroundColor: "#c451ac" }} />
            <h4>{description}</h4>

            <h6>
              <span>Updated at:</span> {time}
            </h6>
          </div>
        </div>

        <div className="col-md-4 my-1 text-center">
          <div className="px-3 py-2 mx-1 w-box-mid">
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
        </div>

        <div className="col-md-4 my-1 text-center">
          <div className="px-3 py-2 mx-1 w-box">
            <h4>
              <span>Pressure(mbar)</span>: {pressure}
            </h4>
            <br />
            <br />
            <h4>
              <span>Humidity(%):</span> {humidity}
            </h4>
            <br />
            <br />
            <h5>
              <span>Wind Speed(km/hr):</span> {wind_speed}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="weather-page">
      <NavBar loggedIn />
      {mySearch}
      <br />
      {myText}
      <br />
      <div className="text-center pt-5">
        <br />
        <hr className="mt-5" style={{ width: "40%", backgroundColor: "#c451ac" }} />
        {props.saved.map((saves) => {
          return (
            <span>
              {/*Key prop should be appended into the span tag for uniqueness  */}
              <div className="container-fluid" style={{ marginTop: "80px" }}>
                <div className="row pt-3">
                  <div className="col-md-4 my-1 text-center">
                    <div className="px-3 py-2 mx-1 svd-box">
                      <sup>
                        <img
                          src={saves.img}
                          alt="weather icon"
                          style={{ width: "8%", marginRight: "20px", marginTop: "-40px" }}
                        />
                      </sup>
                      <h1 style={{ fontSize: "80px" }}>
                        {saves.temperature}
                        <sup>°</sup>C |{" "}
                        <NavLink className="t-link" onClick={CelsuisToFahrenheit}>
                          <h1>F{temp}</h1>
                        </NavLink>{" "}
                        {/**to change on load instead of click*/}
                      </h1>
                      <hr style={{ width: "40%", backgroundColor: "#c451ac" }} />
                      <h4>{saves.description}</h4>

                      <h6>{saves.time}</h6>
                    </div>
                  </div>

                  <div className="col-md-4 my-1 text-center">
                    <div className="px-3 py-2 mx-1 svd-box-mid">
                      <h2>{saves.location}</h2>
                      <br />
                      <h4>
                        {saves.region} | {saves.country}
                      </h4>
                      <br />
                      <p>{saves.timezone}</p>
                    </div>
                  </div>

                  <div className="col-md-4 my-1 text-center">
                    <div className="px-3 py-2 mx-1 svd-box">
                      <h4>{saves.pressure}</h4>
                      <hr style={{ width: "40%", backgroundColor: "#c451ac" }} />
                      <h4>{saves.humidity}</h4>
                      <hr style={{ width: "40%", backgroundColor: "#c451ac" }} />
                      <h5>{saves.wind_speed}</h5>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <hr className="mt-5" style={{ width: "40%", backgroundColor: "#c451ac" }} />
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default Weather;
