import React, { useState } from 'react';
import GlobalStyle from './AppStyle';
import Board from 'containers/Board/Board';
import Stats from 'containers/Stats/Stats';
import { BOX_STATUS, GAME_STATUS } from 'const';
import { generateGrid, generateLevel, updateBoardOnClick } from 'utils';

function App(props) {
  const [boxes, setBoxes] = useState(generateGrid());
  const [gameStatus, setGameStatus] = useState(GAME_STATUS.START);
  const [level, setLevel] = useState(7);
  const [lives, setLives] = useState(level);
  const [leftToClick, setLeftToClick] = useState(level);

  function handleBoxClick({ target }) {
    const { id, status } = target.dataset;
    let newBoxes = boxes;
    let boxesLeft = leftToClick;

    if (gameStatus === GAME_STATUS.START) {
      newBoxes = generateLevel(level, id);
      boxesLeft = level + 1;
      setGameStatus(GAME_STATUS.ACTIVE);
    } else if (status !== BOX_STATUS.NEXT) {
      return;
    }

    const { availableToClick, updatedBoxes } = updateBoardOnClick(newBoxes, id);

    setBoxes(updatedBoxes);
    setLeftToClick(--boxesLeft);

    if (availableToClick === 0) {
      if (boxesLeft === 0) {
        setGameStatus(GAME_STATUS.LEVEL_COMPLETED);
        setLives(prevLives => prevLives + 1);
        setLevel(prevLevel => prevLevel + 1);
      } else {
        setGameStatus(GAME_STATUS.FAILED);
        setLives(prevLives => prevLives - boxesLeft);
      }
    }
  }

  return (
    <React.Fragment>
      <Board boxes={boxes} onBoxClick={handleBoxClick} />
      <Stats
        fieldsLeft={leftToClick}
        gameStatus={gameStatus}
        level={level}
        lives={lives}
      />
      <GlobalStyle />
    </React.Fragment>
  );
}

export default App;
