import React from "react";
import "../index.css";

// Material-Ui Components
import { Button, Typography, Card } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

export default function AdjustTime({ type, time }) {
  return (
    <Card className="border" variant="outlined">
      <Typography variant="h3" align="center">
        {type}
      </Typography>
      <Typography variant="h4" align="center">
        {time}
      </Typography>
      <div className="plusMinusContainer">
        <Button className="plus" variant="contained">
          <AddIcon />
        </Button>
        <Button className="minus" variant="contained">
          <RemoveIcon />
        </Button>
      </div>
    </Card>
  );
}
