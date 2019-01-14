import React, { useEffect, useState } from 'react';
import Button from 'components/Button/Button';
import { nextLevel, resetGame, resetLevel } from 'actions';
import { GAME_STATUS } from 'const';
import {
  ModalContent,
  ModalFooter,
  ModalOverlay,
  ModalTitle,
  ModalWrapper
} from './StyledModal';

function Modal(props) {
  const { dispatch, gameStatus, leftToClick, level } = props
  const [modalConfig, setModalConfig] = useState({});

  useEffect(
    () => setModalConfig(getModalConfig(gameStatus)),
    [gameStatus]
  )

  function getModalConfig(modalType) {
    if (modalType === GAME_STATUS.LEVEL_COMPLETED) {
      return {
        actions: [{
          label: 'Yes',
          onClick: () => dispatch(nextLevel()),
          type: 'primary'
        }],
        content: 'Do you want to play next level?',
        title: `Level ${level} completed!`
      };
    } else if (modalType === GAME_STATUS.LEVEL_FAILED) {
      return {
        actions: [{
          label: 'Yes',
          onClick: () => dispatch(resetLevel()),
          type: 'primary'
        }],
        content: `
          You lost ${leftToClick} lives.
          Do you want to try again?
        `,
        title: `Level ${level} failed!`
      };
    } else if (modalType === GAME_STATUS.GAME_FAILED) {
      return {
        actions: [{
          label: 'Yes',
          onClick: () => dispatch(resetGame()),
          type: 'primary'
        }],
        content: `
          You lost all lives.
          Do you want to start over?
        `,
        title: `You lost! :(`
      };
    }

    return {};
  }

  const { actions = [], content, title } = modalConfig;

  return (
    <ModalOverlay visible={!!content}>
      <ModalWrapper>
        <ModalTitle>{title}</ModalTitle>
        <ModalContent>{content}</ModalContent>
        <ModalFooter>
          {actions.map(({ label, onClick, type }) =>
            <Button
              key={label}
              label={label}
              onClick={onClick}
              type={type} />
          )}
        </ModalFooter>
      </ModalWrapper>
    </ModalOverlay>
  );
}

function shouldSkipUpdate(prevProps, nextProps) {
  // @TODO: update to match exact cases
  return prevProps.gameStatus === nextProps.gameStatus;
}

export default React.memo(Modal, shouldSkipUpdate);
