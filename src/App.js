import "./index.css";
import React, { useState, useEffect } from "react";

import Timer from "./components/Timer";
import AdjustTimer from "./components/AdjustTime";

function App() {
  const initialSessionTime = 25;
  const initialBreakTime = 5;
  let [sessionTime, setSessionTime] = useState(initialSessionTime);
  let [breakTime, setBreakTime] = useState(initialBreakTime);
  let [minute, setMinute] = useState(sessionTime);
  let [second, setSecond] = useState(0);
  let [timerActive, toggleTimerActive] = useState(false);
  let [isStudySession, changeSessionType] = useState(true);

  useEffect(() => {
    document.title = `${minute}:${second < 10 ? `0${second}` : second} ${
      isStudySession ? "Study" : "Break"
    } Time`;
  }, [second, minute, isStudySession]);

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
        setSessionTime={setSessionTime}
        isStudySession={isStudySession}
        changeSessionType={changeSessionType}
        sessionTime={sessionTime}
        breakTime={breakTime}
      />

      <div className="adjustersContainer">
        <AdjustTimer
          type="Session"
          time={sessionTime}
          minute={minute}
          setTime={setSessionTime}
          timerActive={timerActive}
          setMinute={setMinute}
          isStudySession={isStudySession}
        />
        <AdjustTimer
          type="Break"
          time={breakTime}
          minute={minute}
          setTime={setBreakTime}
          timerActive={timerActive}
          setMinute={setMinute}
          isStudySession={isStudySession}
        />
      </div>

      <audio
        id="beep"
        src="https://freesound.org/data/previews/202/202029_2605156-lq.mp3"
        ref={(audio) => {
          window.audioBeep = audio;
        }}
      ></audio>
    </main>
  );
}

export default App;
