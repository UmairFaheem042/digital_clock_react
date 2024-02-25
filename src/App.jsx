import React from "react";

const App = () => {
  return (
    <div className="App">
      <div className="clock-container">
        <div className="clock-container_top">
          <p className="time">
            <span className="hour">11</span>
            <span className="colon">:</span>
            <span className="minute">45</span>
            <span className="zone">PM</span>
          </p>
        </div>
        <div className="clock-container_bottom">
          <p>
            <span className="day">Saturday</span>
            <span className="date">17.02.2024</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
