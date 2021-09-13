import "./index.css";
import React, { useState, useEffect } from "react";

import Timer from "./components/Timer";
import AdjustTimer from "./components/AdjustTime";

// Material UI
import { Card } from "@material-ui/core";

function App() {
  let [minute, setMinute] = useState(20);
  let [second, setSecond] = useState("00");
  let [initialSessionTime, setSessionTime] = useState(25);
  let [initialBreakTime, setBreakTime] = useState(5);

  useEffect(() => {
    document.title = `${minute}:${second}`;
  }, []);

  return (
    <main className="app">
      <Timer
        minute={minute}
        second={second}
        setMinute={setMinute}
        setSecond={setSecond}
      />
      <div className="adjustersContainer">
        <AdjustTimer
          type="Session"
          time={initialSessionTime}
          minute={minute}
          second={second}
          setMinute={setMinute}
          setSecond={setSecond}
        />
        {/* <AdjustTimer
          type="Break"
          time={initialBreakTime}
          minute={minute}
          second={second}
          setMinute={setMinute}
          setSecond={setSecond}
        /> */}
      </div>
    </main>
  );
}

export default App;
