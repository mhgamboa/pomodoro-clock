import React from "react";
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
}) {
  const playFunction = () => {
    toggleTimerActive(!timerActive);
    window.runTimer = setInterval(() => {
      //If minute === 0 Make Noise and start break time
      setSecond((second) => {
        if (second === 0) {
          if (minute > 0) {
            setMinute((minute) => minute - 1);
            return (second = 59);
          }
        } else {
          return --second;
        }
      });
    }, 1000);
  };

  const pauseFunction = () => {
    toggleTimerActive(!timerActive);
    clearInterval(window.runTimer);
  };

  const resetFunction = () => {
    if (timerActive) {
      toggleTimerActive(!timerActive);
      clearInterval(window.runTimer);
    }
    setMinute(initialSessionTime);
    setBreakTime(initialBreakTime);
    setSecond(0);
  };

  return (
    <Card className="border" variant="outlined">
      <Typography variant="h3" align="center">
        Timer
      </Typography>
      <Typography variant="h4" align="center">
        {minute}:{second < 10 ? `0${second}` : second}
      </Typography>

      <div className="plusMinusContainer">
        {/* Play/Pause Putton */}
        <Button
          variant="contained"
          onClick={() => (timerActive ? pauseFunction() : playFunction())}
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
