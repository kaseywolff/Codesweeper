import React, { useState, useEffect } from "react";

function Timer(
  {
    reset,
    gameOver,
    gameStart
  }) {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);


  if(reset && time != 0) {
    setTime(0);
  };

  if(gameOver && running) {
    setRunning(false);
  };

  if(gameStart && !running && !gameOver) {
    setRunning(true);
    setTime(1000);
  };
  
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    };
    return () => clearInterval(interval);
  }, [running]);

  const digitsArr = ('00' + Math.floor((time / 1000))).slice(-3).split('');

  const digits = [];
  digitsArr.map((digit, index) => {
    digits.push(
      <div key={`digit${index}`} className='digit'>
        {digit}
      </div>
    );
  });

  

  return(
    <div className='stats-box'>
      {digits}
    </div>
  );
};

export default Timer;
