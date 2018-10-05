import { combineReducers } from 'redux';

import { gameStatus } from './gameStatus';
import { scorePlay } from './scorePlay';

const rootReducer = combineReducers({
  gameStatus,
  scorePlay,
});

export default rootReducer;
