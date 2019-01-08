import React from 'react';
import Timer from 'components/Timer/Timer';
import { StyledStats, StyledField } from './StyledStats';

function Stats(props) {
  const { fieldsLeft, gameStatus, level, lives } = props;

  return (
    <StyledStats>
      <Timer gameStatus={gameStatus} />
      <StyledField>Lives: {lives}</StyledField>
      <StyledField>Level: {level}</StyledField>
      <StyledField>Fields left: {fieldsLeft}</StyledField>
    </StyledStats>
  );
}

export default Stats;
