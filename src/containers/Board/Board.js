import React, { useState } from 'react';
import Box from 'components/Box/Box';
import { StyledWrapper, StyledBoard } from './StyledBoard';
import { BOX_STATUS, GAME_STATUS } from 'const';
import { generateGrid, generateLevel, updateBoxesOnClick } from 'utils';

function Board(props) {
  const [boxes, setBoxes] = useState(generateGrid());
  const [gameStatus, setGameStatus] = useState(GAME_STATUS.START);
  const [level, setLevel] = useState(18);

  function handleClick({ target }) {
    const { id, status } = target.dataset;
    let newBoxes = boxes;

    if (gameStatus === GAME_STATUS.START) {
      newBoxes = generateLevel(level, id);
      setGameStatus(GAME_STATUS.ACTIVE);
    } else if (status !== BOX_STATUS.NEXT) {
      return;
    }

    setBoxes(updateBoxesOnClick(newBoxes, id));
  }

  return (
    <StyledWrapper>
      <StyledBoard onClick={handleClick}>
        {boxes.map(box => (
          <Box key={`${box.x}-${box.y}`} {...box} />
        ))}
      </StyledBoard>
    </StyledWrapper>
  );
}

export default Board;
