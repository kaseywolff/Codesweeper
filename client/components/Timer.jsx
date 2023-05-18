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
    </div>
  );
};

export default Timer