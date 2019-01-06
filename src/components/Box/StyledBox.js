import styled from 'styled-components';
import { BOX_STATUS } from 'const';

const StyledBox = styled.div`
  min-width: 30px;
  min-height: 30px;
  border: 1px solid var(--light-gray);
  background: ${({ status }) => getBoxBackground(status)};
  cursor: ${({ status }) => status === BOX_STATUS.NEXT
    ? 'pointer'
    : 'default'
  };
  transition: background-color 0.2s linear;
`;

function getBoxBackground(status) {
  if (!status || status === BOX_STATUS.EMPTY) {
    return 'transparent';
  }

  return `var(--${
    status === BOX_STATUS.CLICKABLE ? 'blue' :
    status === BOX_STATUS.CLICKED ? 'brown' :
    status === BOX_STATUS.NEXT ? 'green' :
    'transparent'
  })`;
}

export default StyledBox;
