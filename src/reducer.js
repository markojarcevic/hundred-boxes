import { ACTIONS, BOX_STATUS, GAME_STATUS } from 'const';
import {
  generateGrid,
  generateLevel,
  updateBoardOnClick
} from 'utils';

const emptyGrid = generateGrid();
const initialState = {
  clickable: null,
  boxes: emptyGrid,
  gameStatus: GAME_STATUS.START,
  level: 1,
  lives: 1,
  leftToClick: 0,
  startPosition: null
};

// REDUCER
function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.START_GAME:
      return setStartGame(state, action);
    case ACTIONS.BOX_CLICKED:
      return setBoxClick(state, action);
    case ACTIONS.NEXT_LEVEL:
      return setNextLevel(state);
    case ACTIONS.RESET_LEVEL:
      return resetLevel(state);
    case ACTIONS.RESET_GAME:
      return initialState;
    default:
      return state;
  }
}

// HELPERS
function setStartGame(state, { payload: startPosition }) {
  const newLevel = generateLevel(state.level, startPosition);

  return {
    ...state,
    ...updateBoardOnClick(newLevel, startPosition),
    startPosition,
    gameStatus: GAME_STATUS.ACTIVE,
    leftToClick: state.level
  };
}

function setBoxClick(state, { payload: boxId }) {
  const leftToClick = state.leftToClick - 1;
  const { boxes, clickable } = updateBoardOnClick(state.boxes, boxId);
  const updatedState = {
    ...state,
    clickable,
    boxes,
    leftToClick
  };

  if (clickable === 0) {
    // Level compelted
    if (leftToClick === 0) {
      updatedState.gameStatus = GAME_STATUS.LEVEL_COMPLETED;
    // Level failed
    } else {
      const livesLeft = state.lives - leftToClick;
      const gameFailed = livesLeft <= 0;

      updatedState.lives = gameFailed ? 0 : livesLeft;
      updatedState.gameStatus = gameFailed
        ? GAME_STATUS.GAME_FAILED
        : GAME_STATUS.LEVEL_FAILED;
    }
  }

  return updatedState;
}

function setNextLevel(state) {
  return {
    ...initialState,
    level: state.level + 1,
    lives: state.lives + 1
  }
}

function resetLevel(state) {
  const resetGrid = state.boxes.map(box => {
    if (box.status !== BOX_STATUS.EMPTY) {
      box.status = BOX_STATUS.CLICKABLE
    }

    return box;
  });

  return {
    ...state,
    ...updateBoardOnClick(resetGrid, state.startPosition),
    gameStatus: GAME_STATUS.ACTIVE,
    leftToClick: state.level
  }
}

export { ACTIONS, initialState };
export default reducer;
