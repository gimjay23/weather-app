import React from "react";
import sun from "./sun.png";

export default function Day() {
  const widgetDay = {
    position: "relative",
    backgroundColor: "inherit",
    marginTop: "25%",
    marginLeft: "1100px",
    height: "auto",
  };

  return (
    <div>
      <img style={widgetDay} src={sun} alt="day" />
    </div>
  );
};
