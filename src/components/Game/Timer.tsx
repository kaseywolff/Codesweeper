import React, { useState, useEffect } from "react";
import { TimerProps } from "../../types";


export default function Timer({time}): JSX.Element {

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