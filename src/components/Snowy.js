import React from "react";
import snow from "./snow.png";

export default function Storm() {
  const widgetSnow = {
    position: "relative",
    backgroundColor: "inherit",
    marginTop: "-90px",
    height: "auto",
    textAlign: "center",
    padding: "30px",
  };

  return (
    <div>
      <img style={widgetSnow} src={snow} alt="snowy weather" />
    </div>
  );
}
