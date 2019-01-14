import React, { useReducer } from 'react';
import GlobalStyle from './AppStyle';
import Board from 'containers/Board/Board';
import Stats from 'containers/Stats/Stats';
import Modal from 'components/Modal/Modal';
import { BOX_STATUS, GAME_STATUS } from 'const';
import reducer, { initialState } from 'reducer';
import { boxClick, startGame } from 'actions';

function App(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { boxes, gameStatus, leftToClick, level, lives } = state;

  function handleBoxClick({ target }) {
    const { id: boxId, status } = target.dataset;

    if (gameStatus === GAME_STATUS.START) {
      dispatch(startGame(boxId));
    } else if (status === BOX_STATUS.NEXT) {
      dispatch(boxClick(boxId));
    }
  }

  return (
    <React.Fragment>
      <Board boxes={boxes} onBoxClick={handleBoxClick} />
      <Stats
        fieldsLeft={leftToClick}
        gameStatus={gameStatus}
        level={level}
        lives={lives}
      />
      <Modal
        dispatch={dispatch}
        gameStatus={gameStatus}
        leftToClick={leftToClick}
        level={level} />
      <GlobalStyle />
    </React.Fragment>
  );
}

export default App;
