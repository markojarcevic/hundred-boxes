import styled from 'styled-components';

const buttonTypes = {
  primary: `
    border: 1px solid var(--dark-gray);
    background-color: var(--dark-gray);
    color: white;
  `,
  secondary: `
    border: 1px solid var(--dark-gray);
    background-color: transparent;
    color: var(--dark-gray);
  `
};

const StyledButton = styled.button`
  min-width: 80px;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 3px;
  ${({ type }) => buttonTypes[type]}
`;

export default StyledButton;
