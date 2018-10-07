import { gameConstants } from '../../Constants/gameConstants';

const initialState = {
  isStarted: false,
  isRunning: false,
  isEnded: false,
  totalHits: 0,
  score: 0,
};

export const scorePlay = (state = initialState, action) => {
  switch (action.type) {
    case gameConstants.HIT_MOLE:
      return {
        ...state,
        score: (state.score + 10),
        totalHits: (state.totalHits + 1),
      };
    case gameConstants.MISS_MOLE:
      return {
        ...state,
        score: (state.score - 3),
      };
    case gameConstants.RESET_GAME:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
