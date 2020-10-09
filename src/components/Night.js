import React from "react";
import moon from "./moon.png";

export default function Night() {
  const widgetNight = {
    backgroundColor: "inherit",
    marginTop: "20%",
    height: "auto",
    textAlign: "center",
    padding: "30px",
  };

  return (
    <div>
      <img style={widgetNight} src={moon} alt="night" />
    </div>
  );
};
