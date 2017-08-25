import { FETCH_USERS, FETCH_USER_DATA } from '../actions/types';

export const usersReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_USERS:
      return [...action.payload.data];
    default:
      return state;
  }
};

export const userDataReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_USER_DATA:
      return [...action.payload.data];
    default:
      return state;
  }
};
