import React, { useState, useEffect } from "react";

function Timer(props) {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);


  if(props.reset && time != 0) {
    setTime(0);
  };

  if(props.gameOver && running) {
    setRunning(false);
  };

  if(props.gameStart && !running && !props.gameOver) {
    setRunning(true);
    setTime(1000)
  };

  
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return(
    <div id='timer'>
        <span>{("0" + Math.floor((time / 1000))).slice(-2)}</span>
    </div>
  );
};

export default Timer;

// https://w3collective.com/react-stopwatch/

