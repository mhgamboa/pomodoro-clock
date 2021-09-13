import React from "react";
import "../index.css";

// Material-Ui Components
import { Button, Typography, Card } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

export default function Timer({ minute, second }) {
  console.log(minute);
  return (
    <Card className="border" variant="outlined">
      <Typography variant="h3" align="center">
        Timer
      </Typography>
      <Typography variant="h4" align="center">
        {minute}:{second}
      </Typography>

      <div className="plusMinusContainer">
        <Button className="plus">
          <AddIcon />
        </Button>
        <Button className="minus">
          <RemoveIcon />
        </Button>
      </div>
    </Card>
  );
}
