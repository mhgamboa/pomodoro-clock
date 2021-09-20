import "./index.css";
import React, { useState, useEffect } from "react";

import Timer from "./components/Timer";
import AdjustTimer from "./components/AdjustTime";

// Material UI
import { Card } from "@material-ui/core";

function App() {
  let [initialSessionTime, setSessionTime] = useState(25);
  let [initialBreakTime, setBreakTime] = useState(5);
  let [minute, setMinute] = useState(initialSessionTime);
  let [second, setSecond] = useState(59);
  let [timerActive, toggleTimerActive] = useState(false);

  useEffect(() => {
    document.title = `${minute}:${second}`;
  });

  return (
    <main className="app">
      <Timer
        minute={minute}
        second={second}
        setMinute={setMinute}
        setSecond={setSecond}
        timerActive={timerActive}
        toggleTimerActive={toggleTimerActive}
      />
      <div className="adjustersContainer">
        <AdjustTimer
          type="Session"
          time={initialSessionTime}
          minute={minute}
          second={second}
          setMinute={setMinute}
        />
        {/* <AdjustTimer
          type="Break"
          time={initialBreakTime}
          minute={minute}
          second={second}
          setMinute={setMinute}
        /> */}
      </div>
    </main>
  );
}

export default App;
