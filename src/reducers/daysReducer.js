import { DAYS_ARRAY } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case DAYS_ARRAY:
      return action.payload;
    default:
      return state;
  }
};
