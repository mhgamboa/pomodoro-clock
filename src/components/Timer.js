import React, { useState } from "react";
import "../index.css";

// Material-Ui Components
import { Button, Typography, Card } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";

export default function Timer({ minute, second, setMinute }) {
  let [timerActive, runTimer] = useState(false);

  function adjustTime(mathOperation) {
    switch (mathOperation) {
      case "add":
        console.log("add");
        setMinute(minute + 1);
        break;
      case "minus":
        setMinute(minute - 1);
        break;
      default:
        break;
    }
  }

  const toggleTimer = () => {
    setInterval(() => console.log("hi"), 1000);
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
          onClick={() => toggleTimer()}
          fullWidth={true}
        >
          <PlayArrowIcon />
          <PauseIcon />
        </Button>
      </div>
    </Card>
  );
}
