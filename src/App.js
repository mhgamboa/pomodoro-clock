import "./index.css";
import React, { useState, useEffect } from "react";

import Timer from "./components/Timer";
import AdjustTimer from "./components/AdjustTime";

function App() {
  let [minute, setMinute] = useState(20);
  let [second, setSecond] = useState("00");

  useEffect(() => {
    document.title = `${minute}:${second}`;
  }, []);

  return (
    <main className="app">
      <Timer
        className="adjustersContainer"
        minute={minute}
        second={second}
        setMinute={setMinute}
        setSecond={setSecond}
      />
      <div>
        <AdjustTimer
          minute={minute}
          second={second}
          setMinute={setMinute}
          setSecond={setSecond}
        />
        <AdjustTimer
          minute={minute}
          second={second}
          setMinute={setMinute}
          setSecond={setSecond}
        />
      </div>
    </main>
  );
}

export default App;
