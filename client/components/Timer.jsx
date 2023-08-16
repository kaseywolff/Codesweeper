import React, { useState, useEffect } from "react";

function Timer(props) {
  const [timer, setTimer] = useState(0);

  const gameStart = props.gameStart;
  const gameOver = props.gameOver;

  useEffect(() => {
    let interval;
    if (gameStart) {
      interval = setInterval(() => {
        setTimer((prevTime) => prevTime + 10);
      }, 10);
    } else if (gameOver) {
      stopInterval(interval);
    }
    return () => clearInterval(interval);
  }, [gameStart]);

  return(
    <div id='timer'>
        <span>{("0" + Math.floor((timer / 1000) % 60)).slice(-2)}</span>
    </div>
  );
};

export default Timer;