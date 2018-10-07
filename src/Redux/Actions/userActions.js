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

const stop = () => {
  const stopGame = () => {
    return {
      type: gameConstants.STOP_GAME,
    };
  };
  return (dispatch) => {
    dispatch(stopGame());
  };
};

const resetGame = () => {
  const reset = () => {
    return {
      type: gameConstants.RESET_GAME,
    };
  };

  return (dispatch) => {
    dispatch(reset());
  };
};


export const userActions = {
  start,
  stop,
  resetGame,
};
