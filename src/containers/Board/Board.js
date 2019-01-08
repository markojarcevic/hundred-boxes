import React from 'react';
import Box from 'components/Box/Box';
import { StyledWrapper, StyledBoard } from './StyledBoard';

function Board({ boxes, onBoxClick }) {
  return (
    <StyledWrapper>
      <StyledBoard onClick={onBoxClick}>
        {boxes.map(box => (
          <Box key={`${box.x}-${box.y}`} {...box} />
        ))}
      </StyledBoard>
    </StyledWrapper>
  );
}

export default Board;
