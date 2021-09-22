import React, { useEffect } from "react";
import "../index.css";

// Material-Ui Components
import { Button, Typography, Card } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

export default function AdjustTime({
  type,
  time,
  minute,
  setTime,
  timerActive,
  setMinute,
}) {
  useEffect(() => {
    if (!timerActive && type === "Session") {
      setMinute(time);
    }
  }, [time]);
  return (
    <Card className="border" variant="outlined">
      <Typography variant="h3" align="center">
        {type}
      </Typography>
      <Typography variant="h4" align="center">
        {time}
      </Typography>
      <div className="plusMinusContainer">
        <Button
          className="plus"
          variant="contained"
          onClick={() =>
            !timerActive && time < 60 && setTime((prevMinute) => prevMinute + 1)
          }
        >
          <AddIcon />
        </Button>
        <Button
          className="minus"
          variant="contained"
          onClick={() =>
            !timerActive && time > 1 && setTime((prevMinute) => prevMinute - 1)
          }
        >
          <RemoveIcon />
        </Button>
      </div>
    </Card>
  );
}
