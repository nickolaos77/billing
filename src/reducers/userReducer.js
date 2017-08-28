import { FETCH_USERS, FETCH_USER_DATA, SELECT_WEEK } from '../actions/types';

export const usersReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_USERS:
      return [...action.payload.data];
    default:
      return state;
  }
};

export const userDataReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER_DATA:
      return { weeks: action.payload.weeks, userId: action.payload.userId };
    default:
      return state;
  }
};

export const selectWeekReducer = (state = null, action) => {
  switch (action.type) {
    case SELECT_WEEK:
      return action.payload;
    default:
      return state;
  }
};
