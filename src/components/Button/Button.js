import React from 'react';
import StyledButton from './StyledButton';

function Button({ label, onClick, type }) {
  return (
    <StyledButton type={type} onClick={onClick}>
      {label}
    </StyledButton>
  );
}

export default Button;
