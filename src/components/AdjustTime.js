import React, { useEffect } from "react";
import "../index.css";

// Material-Ui Components
import { Button, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

export default function AdjustTime({
  type,
  time,
  setTime,
  timerActive,
  setMinute,
  isStudySession,
}) {
  useEffect(() => {
    if (!timerActive && type === "Session" && isStudySession) {
      setMinute(time);
    }

    if (!timerActive && type === "Break" && !isStudySession) {
      setMinute(time);
    }
  }, [time, setMinute, type]);

  return (
    <div className="adjuster fade-animation">
      <Typography variant="h2" component="h1" align="center">
        {type}
      </Typography>
      <Typography variant="h3" align="center">
        {time}
      </Typography>
      <div className="plusMinusContainer">
        <Button
          size="large"
          className="plus"
          variant="contained"
          onClick={() =>
            !timerActive && time < 60 && setTime((prevMinute) => prevMinute + 1)
          }
        >
          <AddIcon fontSize="large" />
        </Button>
        <Button
          size="large"
          className="minus"
          variant="contained"
          onClick={() =>
            !timerActive && time > 1 && setTime((prevMinute) => prevMinute - 1)
          }
        >
          <RemoveIcon fontSize="large" />
        </Button>
      </div>
    </div>
  );
}
