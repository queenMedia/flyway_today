import { useState, useEffect } from 'react';

const useCountdown = (initialMinutes) => {
  const [timeRemaining, setTimeRemaining] = useState(initialMinutes * 60);

  useEffect(() => {
    if (timeRemaining <= 0) {
      return;
    }

    const interval = setInterval(() => {
      setTimeRemaining((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [timeRemaining]);

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  return { minutes, seconds };
};

export default useCountdown;
