import { combineReducers } from 'redux';
import monthsReducer from './monthsReducer';
import daysReducer from './daysReducer';
import { usersReducer, userDataReducer, selectWeekReducer } from './userReducer';

const rootReducer = combineReducers({
  month: monthsReducer,
  days: daysReducer,
  users: usersReducer,
  userData: userDataReducer,
  week: selectWeekReducer,
});

export default rootReducer;
