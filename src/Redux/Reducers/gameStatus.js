import { gameConstants } from '../../Constants/gameConstants';

const initialState = {
  isEnded: false,
  totalHits: 0,
  score: 0,
};

export const gameStatus = (state = initialState, action) => {
  switch (action.type) {
    case gameConstants.START_GAME:
      return {
        ...state,
        isEnded: false,
      };
    case gameConstants.STOP_GAME:
      return {
        ...state,
        isEnded: true,
      };
    default:
      return state;
  }
};
