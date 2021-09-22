import React, { useEffect } from "react";
import "../index.css";

// Material-Ui Components
import { Button, Typography, Card } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";

export default function Timer({
  minute,
  setMinute,
  second,
  setSecond,
  timerActive,
  toggleTimerActive,
  initialSessionTime,
  initialBreakTime,
  setBreakTime,
  changeSessionType,
  isStudySession,
  sessionTime,
  breakTime,
}) {
  useEffect(() => {
    if (timerActive) {
      let timer = window.setInterval(() => {
        if (second === 0) {
          if (minute === 0) {
            window.audioBeep.play();
            setSecond(0);
            setMinute(isStudySession ? breakTime : sessionTime);
            changeSessionType(!isStudySession);
          }
          setSecond(60);
          setMinute((prevMinute) => prevMinute - 1);
        }
        setSecond((prevSecond) => prevSecond - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [second, minute, timerActive]);

  const resetFunction = () => {
    toggleTimerActive(false);
    clearInterval(window.runTimer);

    setMinute(initialSessionTime);
    setBreakTime(initialBreakTime);
    setSecond(0);
  };

  return (
    <Card className="border" variant="outlined">
      <Typography variant="h3" align="center">
        {isStudySession ? "Study" : "Break"} Timer
      </Typography>
      <Typography variant="h4" align="center">
        {minute}:{second < 10 ? `0${second}` : second}
      </Typography>

      <div className="plusMinusContainer">
        {/* Play/Pause Putton */}
        <Button
          variant="contained"
          onClick={() => toggleTimerActive(!timerActive)}
          fullWidth={true}
        >
          <PlayArrowIcon />
          <PauseIcon />
        </Button>
        <Button variant="contained" onClick={() => resetFunction()}>
          <RotateLeftIcon />
        </Button>
      </div>
    </Card>
  );
}
