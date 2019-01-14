import styled from 'styled-components';

export const ModalContent = styled.div`
  padding: 8px 16px;
  flex: 1 0 auto;
  color: var(--dark-gray);
`;

export const ModalFooter = styled.div`
  padding: 20px 16px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button:not(:first-child) {
    margin-left: 15px;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.75);
  opacity: ${({ visible }) => visible ? 1 : 0 };
  z-index: ${({ visible }) => visible ? 1 : -1 };
  transition: opacity 0.3s ease-in-out;
`;

export const ModalTitle = styled.h4`
  margin: 0;
  padding: 20px 16px;
  font-size: 16px;
  line-height: 1;
  color: var(--dark-gray);
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  min-height: 150px;
  background: white;
  border-radius: 3px;
`;
