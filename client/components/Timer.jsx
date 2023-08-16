import React, { useState, useEffect } from "react";

function Timer(props) {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  if(props.gameStart && !running) {
    setRunning(true);
  };

  if(props.gameOver) {
    setRunning(false);
  };

  console.log('timer props', props)
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
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
    </div>
  );
};

export default Timer;

// https://w3collective.com/react-stopwatch/
// https://medium.com/@babux1/how-to-pass-state-data-from-one-component-to-another-in-react-js-9b4850887163#:~:text=One%20of%20the%20main%20methods,child%20component%20as%20an%20attribute.