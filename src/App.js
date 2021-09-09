import React, { useState, useEffect } from "react";

import Timer from "./components/Timer";
import AdjustTimer from "./components/AdjustTime";
import "./index.css";

function App() {
  let [minute, setMinute] = useState(20);
  let [second, setSecond] = useState("00");

  useEffect(() => {
    document.title = `${minute}:${second}`;
  }, []);

  return (
    <main className="app">
      <Timer />
      <div className="adjustersContainer">
        <AdjustTimer />
        <AdjustTimer />
      </div>
    </main>
  );
}

export default App;
