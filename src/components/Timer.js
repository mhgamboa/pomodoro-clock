import React, { useEffect } from "react";
import "../index.css";

// Material-Ui Components
import { Button, Typography, Card } from "@material-ui/core";

import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";

export default function Timer({
  minute,
  setMinute,
  second,
  setSecond,
  timerActive,
  toggleTimerActive,
}) {
  const playFunction = () => {
    console.log("Now Playing");
    toggleTimerActive(!timerActive);
    window.runTimer = setInterval(() => {
      console.log("hi");
    }, 1000);
  };

  const pauseFunction = () => {
    console.log("Now Pausing");
    toggleTimerActive(!timerActive);

    clearInterval(window.runTimer);
  };

  return (
    <Card className="border" variant="outlined">
      <Typography variant="h3" align="center">
        Timer
      </Typography>
      <Typography variant="h4" align="center">
        {minute}:{second}
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
      </div>
    </Card>
  );
}
