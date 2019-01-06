import React from 'react';
import StyledBox from './StyledBox';

function Box({ id, status }) {
  return <StyledBox status={status} data-id={id} data-status={status} />;
}

export default React.memo(Box);
