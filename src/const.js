export const ACTIONS = {
  BOX_CLICKED: 'BOX_CLICKED',
  COMPLETE_LEVEL: 'COMPLETE_LEVEL',
  FAIL_LEVEL: 'FAIL_LEVEL',
  NEXT_LEVEL: 'NEXT_LEVEL',
  RESET_GAME: 'RESET_GAME',
  RESET_LEVEL: 'RESET_LEVEL',
  SET_GAME_STATE: 'SET_GAME_STATE',
  SET_LEVEL: 'SET_LEVEL',
  START_GAME: 'START_GAME'
};

export const GAME_STATUS = {
  ACTIVE: 'active',
  GAME_FAILED: 'game_failed',
  LEVEL_COMPLETED: 'level_completed',
  LEVEL_FAILED: 'level_failed',
  PAUSED: 'paused',
  START: 'start'
};

export const BOX_STATUS = {
  CLICKABLE: 'clickable',
  CLICKED: 'clicked',
  EMPTY: 'empty',
  NEXT: 'next'
};
