import { CURRENT_MONTH, NEXT_MONTH, PREVIOUS_MONTH } from '../actions/types';
import moment from 'moment';

export default (state = null, action) => {
  switch (action.type) {
    case CURRENT_MONTH:
      return ({
        name: moment().format('MMMM'),
        monthNum: moment().month(),
        date: moment(),
      });
    case NEXT_MONTH:
      let nextDate = state.date.add(1,'M');
      return ({
        name: nextDate.format('MMMM'),
        monthNum: nextDate.month(),
        date: nextDate,
      });
    case PREVIOUS_MONTH:
      let previousDate = state.date.subtract(1,'M');
      return ({
        name: previousDate.format('MMMM'),
        monthNum: previousDate.month(),
        date: previousDate,
      });
    default:
      return state;
  }
};
