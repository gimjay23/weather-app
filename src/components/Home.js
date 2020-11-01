import React, { Component } from "react";

//imported components
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import Axios from "axios";
import { Button } from "react-bootstrap";

export default class Home extends Component {
  state = {
    coords: {
      latitude: 45,
      longitude: 60,
    },
    data: {},
    inputData: "",
  };

  componentDidMount() {
    //get device location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let newCoords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };

        this.setState({ coords: newCoords });

        const accessKey = "b1c3674909803d33a0ed9f61b672e1c6";
        const base = "http://api.weatherstack.com/";

        //Api call
        Axios.get(
          `${base}current?access_key=${accessKey}&query=${this.state.coords.latitude},${this.state.coords.longitude}`
        ).then((res) => {
          console.log(res);
          const weatherData = {
            location: res.data.location.name,
            region: res.data.location.region,
            country: res.data.location.country,
            time: res.data.location.localtime,
            timezone: res.data.location.timezone_id,
            img: res.data.current.weather_icons,
            temperature: res.data.current.temperature,
            pressure: res.data.current.pressure,
            humidity: res.data.current.humidity,
            description: res.data.current.weather_descriptions[0],
            wind_speed: res.data.current.wind_speed,
          };

          this.setState({ data: weatherData });
        });
      });
    } else {
      //console.log("nothing");
    }
  }

  render() {
    const loggedIn = false;

    return (
      <div className="home-page">
        <NavBar loggedIn={loggedIn} />
        <hr style={{ width: "40%", backgroundColor: "#F2A8B8" }} />
        <br />
        <br />
        <br />
        <center>
          <h4 style={{ marginTop: "250px", color: "black" }}>
            It's currently <Button className="home-temp-button">{this.state.data.temperature} °C</Button> and{" "}
            <Button className="home-button">{this.state.data.description}</Button> in Accra Ghana.{" "}
            <Link className="t-link" to="/signup">
              <Button className="home-button">Sign Up</Button>
            </Link>{" "}
            to view more.
          </h4>
        </center>
      </div>
    );
  }
}
