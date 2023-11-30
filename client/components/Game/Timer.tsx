import React, { useState, useEffect } from "react";
import { TimerProps } from "../../types";


export default function Timer(
  {
    reset,
    gameOver,
    gameStart
  }: TimerProps): JSX.Element {
  const [time, setTime] = useState<number>(0);
  const [running, setRunning] = useState<boolean>(false);


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

  const digits: JSX.Element[] = [];
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