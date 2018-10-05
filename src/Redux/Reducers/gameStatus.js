import { gameConstants } from '../../Constants/gameConstants';

const initialState = {
  isStarted: false,
  isRunning: false,
  isEnded: false,
  totalHits: 0,
  score: 0,
};

export const gameStatus = (state = initialState, action) => {
  switch (action.types) {
    case gameConstants.START_GAME:
      return {
        ...state,
        isStarted: true,
        isRunning: true,
      };
    case gameConstants.END_GAME:
      return {
        ...state,
        isRunning: false,
        isEnded: true,
      };
    case gameConstants.RESET_GAME:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
