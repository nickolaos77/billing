import moment from 'moment';
// the function constructs and returns an array with all the days (numbers) of the view 
// of the specific month 
export default (Month = moment()) => {
  const endOfPreviousMonth = Month.subtract(1, 'M').endOf('month').format('D');
  const endOfMonth = Month.add(1, 'M').endOf('month').format('D');
  const dayOfWeek = Month.startOf('month').format('E');
  // construct array of days
  const arrayOfDays = [];
  for (let i = 1; i < dayOfWeek; i++) {
    arrayOfDays.push( +endOfPreviousMonth + 1 + i - dayOfWeek);
  }
  for (let i = 1; i <= endOfMonth; i++) {
    arrayOfDays.push(i);
  }
  if (arrayOfDays.length <= 35) {
    const desiredLength = 35;
    for (let i = 0; (arrayOfDays.length) <= (desiredLength - 1); i++ ) {
      arrayOfDays.push(i + 1);
    }
  } else {
    const desiredLength = 42;
    for (let i = 0; (arrayOfDays.length) <= (desiredLength - 1); i++) {
      arrayOfDays.push(i + 1);
    }
  }
  return arrayOfDays;
};
