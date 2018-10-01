import { gameActions } from '../gameActions';

const initialState = {
  isStarted: false,
  isRunning: false,
  isEnded: false,
  totalHits: 0,
  score: 0,
};

export const gameStatus = (state = initialState, action) => {
  switch (action.types) {
    case gameActions.START_GAME:
      return {
        ...state,
        isStarted: true,
        isRunning: true,
      };
    case gameActions.END_GAME:
      return {
        ...state,
        isRunning: false,
        isEnded: true,
      };
    case gameActions.RESET_GAME:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
