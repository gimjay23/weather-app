import React from "react";
import storm from "./storm.png";

export default function Storm() {
  const widgetStorm = {
    backgroundColor: "inherit",

    height: "auto",
    padding: "30px",
  };

  return (
    <div>
      <img style={widgetStorm} src={storm} alt="stormy weather" />
    </div>
  );
};
