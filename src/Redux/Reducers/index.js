import { combineReducers } from 'redux';

import { gameStatus } from './gameStatus';

const rootReducer = combineReducers({
  gameStatus,
});

export default rootReducer;
