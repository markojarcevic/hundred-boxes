import { ACTIONS } from 'const';

// Action Creators
export function startGame(startPosition) {
  return {
    type: ACTIONS.START_GAME,
    payload: startPosition
  };
}
export function boxClick(boxId) {
  return {
    type: ACTIONS.BOX_CLICKED,
    payload: boxId
  };
}
export function nextLevel() {
  return {
    type: ACTIONS.NEXT_LEVEL
  };
}
// export function setLevel(level) {
//   return {
//     type: ACTIONS.SET_LEVEL,
//     payload: level
//   };
// }
// export function failLevel(leftToClick) {
//   return {
//     type: ACTIONS.FAIL_LEVEL,
//     payload: leftToClick
//   };
// }
export function resetLevel() {
  return {
    type: ACTIONS.RESET_LEVEL
  };
}
export function resetGame() {
  return {
    type: ACTIONS.RESET_GAME
  };
}
// export function setGameState(payload) {
//   return {
//     type: ACTIONS.SET_GAME_STATE,
//     payload
//   };
// }
