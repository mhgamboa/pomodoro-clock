import React from "react";
import "../index.css";

export default function Timer({ minute, second }) {
  console.log(minute);
  return (
    <div className="border">
      <h2>Timer</h2>
      <h3>
        {minute}:{second}
      </h3>

      <div className="plusMinusContainer">
        <span className="plus">+</span>
        <span className="minus">-</span>
      </div>
    </div>
  );
}
