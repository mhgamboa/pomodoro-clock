import "./index.css";
import React, { useState, useEffect } from "react";

import Timer from "./components/Timer";
import AdjustTimer from "./components/AdjustTime";

function App() {
  const initialSessionTime = 25;
  const initialBreakTime = 5;
  let [sesstionTime, setSessionTime] = useState(initialSessionTime);
  let [breakTime, setBreakTime] = useState(initialBreakTime);
  let [minute, setMinute] = useState(sesstionTime);
  let [second, setSecond] = useState(5);
  let [timerActive, toggleTimerActive] = useState(false);
  let [currentSession, changeSessionType] = useState("session");

  useEffect(() => {
    document.title = `${minute}:${second < 10 ? `0${second}` : second}`;
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
        initialSessionTime={initialSessionTime}
        initialBreakTime={initialBreakTime}
        setBreakTime={setBreakTime}
      />
      <div className="adjustersContainer">
        <AdjustTimer
          type="Session"
          time={sesstionTime}
          minute={minute}
          setMinute={setSessionTime}
        />
        <AdjustTimer
          type="Break"
          time={breakTime}
          minute={minute}
          setMinute={setBreakTime}
        />
      </div>
    </main>
  );
}

export default App;
