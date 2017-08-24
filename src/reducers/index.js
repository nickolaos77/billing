import { combineReducers } from 'redux';
import monthsReducer from './monthsReducer';
import { usersReducer, userDataReducer } from './userReducer';

const rootReducer = combineReducers({
  month: monthsReducer,
  users: usersReducer,
  userData: userDataReducer,
});

export default rootReducer;
