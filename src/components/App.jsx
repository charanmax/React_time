import React, { useState } from "react";

const now = new Date().toLocaleTimeString();
function App() {
  setInterval(increase, 1000);
  const [updateTime, timer] = useState(now);

  function increase() {
    var time = new Date().toLocaleTimeString();
    timer(time);
  }

  return (
    <div className="container">
      <h1 style={{ fontSize: "40px" }}>{updateTime}</h1>
      <button onClick={increase}>Get Time</button>
    </div>
  );
}

export default App;
