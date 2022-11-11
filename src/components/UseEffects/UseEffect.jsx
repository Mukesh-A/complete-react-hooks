import React from "react";
import { useState, useEffect } from "react";

const UseEffect = () => {
  console.log("enterence called");

  const [update, setUpdate] = useState(0);
//   const [updates, setUpdates] = useState(0);

  const updateCount = (val) => {
    console.log("count called");
    return val === "inc" ? setUpdate(update + 1) : setUpdate(update - 1);
  };
  useEffect(() => {
    document.title = update;
    console.log("effect called");
  },[update]);
  return (
    <div>
      {console.log("state called")}
      <button onClick={() => updateCount("inc")}>+</button>
      <h2>{update}</h2>
      <button onClick={() => updateCount("dec")}>-</button>
    </div>
  );
};

export default UseEffect;
