import React from "react";
import "../index.css";

// Material-Ui Components
import { Button, Typography, Card } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";

export default function Timer({ minute, second, setMinute }) {
  console.log(minute);
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
  return (
    <Card className="border" variant="outlined">
      <Typography variant="h3" align="center">
        Timer
      </Typography>
      <Typography variant="h4" align="center">
        {minute}:{second}
      </Typography>

      <div className="plusMinusContainer">
        <Button
          className="plus"
          onClick={() => adjustTime("add")}
          variant="contained"
        >
          <AddIcon />
        </Button>
        <Button variant="contained">
          <PlayArrowIcon />
          <PauseIcon />
        </Button>
        <Button
          className="minus"
          onClick={() => adjustTime("minus")}
          variant="contained"
        >
          <RemoveIcon />
        </Button>
      </div>
    </Card>
  );
}
