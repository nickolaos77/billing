import moment from 'moment';
import { CURRENT_MONTH, NEW_MONTH } from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case CURRENT_MONTH:
      return ({
        name: moment().format('MMMM'),
        monthNum: moment().month(),
        date: moment(),
      });
    case NEW_MONTH:
      if (action.payload === 'next') {
        var newDate = state.date.add(1,'M');  
      } else if ( action.payload === 'previous') {
        var newDate = state.date.subtract(1,'M');
      } 
      return ({
        name: newDate.format('MMMM'),
        monthNum: newDate.month(),
        date: newDate,
      });
    default:
      return state;
  }
};
