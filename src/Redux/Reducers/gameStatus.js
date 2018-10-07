import { gameConstants } from '../../Constants/gameConstants';

const initialState = {
  isStarted: false,
  isRunning: false,
  isEnded: false,
  totalHits: 0,
  score: 0,
};

export const gameStatus = (state = initialState, action) => {
  switch (action.type) {
    case gameConstants.START_GAME:
      return {
        ...state,
        isStarted: true,
        isRunning: true,
        isEnded: false,
      };
    case gameConstants.STOP_GAME:
      return {
        ...state,
        isStarted: false,
        isRunning: false,
        isEnded: true,
      };
    default:
      return state;
  }
};
