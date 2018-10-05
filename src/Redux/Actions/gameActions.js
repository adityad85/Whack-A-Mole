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

export const gameActions = {
  hitMole,
};
