import { gameConstants } from '../../Constants/gameConstants';

const start = () => {
  const startGame = () => {
    return {
      type: gameConstants.START_GAME,
    };
  };

  return (dispatch) => {
    dispatch(startGame());
  };
};

export const userActions = {
  start,
};
