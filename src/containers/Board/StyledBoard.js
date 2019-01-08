import styled from 'styled-components';

export const StyledWrapper = styled.div`
  height: 85%;
  display: flex;
  flex: 1 0 0;
  align-items: center;
  justify-content: center;
`;

export const StyledBoard = styled.div`
  display: grid;
  grid-template-columns: 10% 10% 10% 10% 10% 10% 10% 10% 10% 10%;
  grid-template-rows: 10% 10% 10% 10% 10% 10% 10% 10% 10% 10%;
  width: 70vmin;
  height: 70vmin;
  min-width: 300px;
  min-height: 300px;
`;
