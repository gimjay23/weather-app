import React, { Component } from "react";
import "../App.css";
import Axios from "axios";

//imported components
import Weather from "./Weather";

class DataHouse extends Component {
  state = {
    coords: {
      latitude: 45,
      longitude: 60,
    },
    data: {},
    inputData: "",
    saved: [],
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
          //console.log(res);
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

  //track search bar input changes
  change = (value) => {
    this.setState({ inputData: value });
  };

  //Change weather on submit button or enter click
  changeWeather = (event) => {
    event.preventDefault();

    const accessKey = "b1c3674909803d33a0ed9f61b672e1c6";
    const base = "http://api.weatherstack.com/";
    //Api call
    Axios.get(`${base}current?access_key=${accessKey}&query=${this.state.inputData}`).then((res) => {
      //console.log(res);

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
      let currentSearches = this.state.saved;
      currentSearches.unshift(weatherData);
      this.setState({ saved: currentSearches });
    });
  };

  render() {
    return (
      <div className="weather-page">
        <Weather
          weatherData={this.state.data}
          changeRegion={this.change}
          changeWeather={this.changeWeather}
          saved={this.state.saved}
        />
      </div>
    );
  }
}

export default DataHouse;
