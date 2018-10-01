import { gameActions } from '../gameActions';

const start = () => {
  const startGame = () => {
    return {
      type: gameActions.START_GAME,
    };
  };

  return (dispatch) => {
    dispatch(startGame());
  };
};

export const userActions = {
  start,
};
