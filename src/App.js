import "./index.css";
import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";

import Timer from "./components/Timer";
import AdjustTimer from "./components/AdjustTime";

function App() {
  const initialSessionTime = 1;
  const initialBreakTime = 2;
  let [sessionTime, setSessionTime] = useState(initialSessionTime);
  let [breakTime, setBreakTime] = useState(initialBreakTime);
  let [minute, setMinute] = useState(sessionTime);
  let [second, setSecond] = useState(0);
  let [timerActive, toggleTimerActive] = useState(false);
  let [isStudySession, changeSessionType] = useState(true);

  useEffect(() => {
    document.title = `${minute}:${second < 10 ? `0${second}` : second} ${
      isStudySession ? "Study" : "Break"
    } Time Left`;
  }, [second, minute, isStudySession]);

  useEffect(() => {
    console.log(sessionTime, breakTime);
    console.log(timerActive);
  });

  return (
    <main className="app">
      <Fade top>
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
            setMinute={setMinute}
            setTime={setBreakTime}
          />
        </div>
      </Fade>
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
