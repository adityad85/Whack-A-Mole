import { gameActions } from '../gameActions';

const initialState = {
  isStarted: false,
  isRunning: false,
  isEnded: false,
  totalHits: 0,
  score: 0,
};

export const scorePlay = (state = initialState, action) => {
  switch (action.type) {
    case gameActions.HIT_MOLE:
      return {
        ...state,
        score: (state.score + 10),
        totalHits: (state.totalHits + 1),
      };
    case gameActions.MISS_MOLE:
      return {
        ...state,
        score: (state.score - 3),
      };
    default:
      return state;
  }
};
