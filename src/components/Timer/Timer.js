import React, { useEffect, useRef, useState } from 'react';
import { GAME_STATUS } from 'const';

function Timer(props) {
  const { gameStatus } = props;
  const [time, setTime] = useState(0);
  const intervalIdRef = useRef();

  useEffect(() => {
    if (gameStatus === GAME_STATUS.ACTIVE) {
      startTimer();
    } else if (gameStatus === GAME_STATUS.START) {
      resetTimer();
    } else {
      pauseTimer();
    }
  }, [gameStatus]);

  function startTimer() {
    intervalIdRef.current = setInterval(() =>
      setTime(prevTime => prevTime + 1)
    , 1000);
  }

  function pauseTimer() {
    clearInterval(intervalIdRef.current);
  }

  function resetTimer() {
    setTime(0);
  }

  function formatTime(time = 0) {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  }

  function pad(number) {
    return number < 10 ? `0${number}` : number;
  }

  return <React.Fragment>{formatTime(time)}</React.Fragment>;
}

export default React.memo(Timer);
