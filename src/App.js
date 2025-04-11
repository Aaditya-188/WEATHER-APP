import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="#">
          Weather App Project
        </a>{" "}
        | Developed by {"Aaditya Agrawal"}
        <a target="_blank" href="#">
          
        </a>{" "}
      </div>
    </React.Fragment>
  );
}

export default App;
