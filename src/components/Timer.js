import React, { useEffect } from "react";
import "../index.css";

// Material-Ui Components
import { Button, Typography } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";

export default function Timer(props) {
  // Handle Timer
  useEffect(() => {
    if (props.timerActive) {
      let timer = window.setInterval(() => {
        if (props.second === 0 && props.minute === 0) {
          window.audioBeep.play();
          props.setSecond(0);
          props.setMinute(
            props.isStudySession ? props.breakTime : props.sessionTime
          );
          props.changeSessionType(!props.isStudySession);
        } else if (props.second === 0 && props.minute > 0) {
          props.setSecond(59);
          props.setMinute((prevMinute) => prevMinute - 1);
        } else {
          props.setSecond((prevSecond) => prevSecond - 1);
        }
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [props.second, props.minute, props.timerActive]);

  const resetFunction = () => {
    props.toggleTimerActive(false);
    clearInterval(window.runTimer);

    props.changeSessionType(true);
    props.setBreakTime(props.initialBreakTime);
    props.setSessionTime(props.initialSessionTime);
    props.setSecond(0);
  };

  return (
    <div className="timer fade-animation" variant="outlined">
      <Typography variant="h2" component="h1" align="center">
        {props.isStudySession ? "Study" : "Break"} Timer
      </Typography>
      <Typography variant="h3" align="center">
        {props.minute}:{props.second < 10 ? `0${props.second}` : props.second}
      </Typography>

      <div className="plusMinusContainer">
        {/* Play/Pause Putton */}
        <Button
          variant="contained"
          onClick={() => props.toggleTimerActive(!props.timerActive)}
          fullWidth={true}
        >
          <PlayArrowIcon />
          <PauseIcon />
        </Button>
        <Button variant="contained" onClick={() => resetFunction()}>
          <RotateLeftIcon />
        </Button>
      </div>
    </div>
  );
}
