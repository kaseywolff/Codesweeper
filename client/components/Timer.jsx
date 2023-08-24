<<<<<<< HEAD
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
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
=======
import React, { useState, useEffect } from 'react';

function Timer() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer =
      setInterval(() => setCounter(counter + 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div id="timer">
      {counter}
>>>>>>> main
    </div>
  );
};

<<<<<<< HEAD
export default Timer;

// https://w3collective.com/react-stopwatch/
// https://medium.com/@babux1/how-to-pass-state-data-from-one-component-to-another-in-react-js-9b4850887163#:~:text=One%20of%20the%20main%20methods,child%20component%20as%20an%20attribute.
=======
export default Timer
>>>>>>> main
