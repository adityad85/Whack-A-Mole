import { gameConstants } from '../../Constants/gameConstants';

const hitMole = () => {
  const increaseScore = () => {
    return {
      type: gameConstants.HIT_MOLE,
    };
  };
  return (dispatch) => {
    dispatch(increaseScore());
  };
};

const missMole = () => {
  const decreaseScore = () => {
    return {
      type: gameConstants.MISS_MOLE,
    };
  };
  return (dispatch) => {
    dispatch(decreaseScore());
  };
};

export const gameActions = {
  hitMole,
  missMole,
};
