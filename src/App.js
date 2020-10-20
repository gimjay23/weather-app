import React, { Component } from "react";
import "./App.css";
import Axios from "axios";
//import About from "./components/About";
import Weather from "./components/Weather";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
class App extends Component {
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

        //Api call
        Axios.get(
          `http://api.weatherstack.com/current?access_key=02470589636a3e3b09868f65eea8979f&query=${this.state.coords.latitude},${this.state.coords.longitude}`
        ).then((res) => {
          console.log(res);
          let weatherData = {
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
      console.log("nothing");
    }
  }

  //track search bar input changes
  change = (value) => {
    this.setState({ inputData: value });
  };

  //Change weather on submit button or enter click
  changeWeather = (event) => {
    event.preventDefault();
    //Api call
    Axios.get(
      `http://api.weatherstack.com/current?access_key=02470589636a3e3b09868f65eea8979f&query=${this.state.inputData}`
    ).then((res) => {
      console.log(res);
      console.log(res);
      let weatherData = {
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
  };

  render() {
    return (
      <div className="weather-page">
        <Weather
          weatherData={this.state.data}
          changeRegion={this.change}
          changeWeather={this.changeWeather}
        />
      </div>
    );
  }
}

export default App;
