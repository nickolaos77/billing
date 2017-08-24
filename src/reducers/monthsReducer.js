import { CURRENT_MONTH, NEXT_MONTH, PREVIOUS_MONTH } from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case CURRENT_MONTH:
      return action.payload;
    case NEXT_MONTH:
      return state + 1;
    case PREVIOUS_MONTH:
      return state - 1;
    default:
      return state;
  }
};
