// https://stackoverflow.com/questions/38402025/how-to-create-helper-file-full-of-functions-in-react-native
import moment from 'moment';

export default (Month = moment()) => {
  console.log(Month)
  const endOfPreviousMonth = Month.subtract(1, 'M').endOf('month').format('D');
  const endOfMonth = Month.add(1,'M').endOf('month').format('D');
  const startOfMonth = Month.startOf('month').format('dddd');
  const dayOfWeek = Month.startOf('month').format('E');
  // construct array of days
  console.log('dayOfWeek', dayOfWeek);
  const arrayOfDays = [];
  for (let i = 1; i < dayOfWeek; i++) {
    arrayOfDays.push( +endOfPreviousMonth + 1 + i - dayOfWeek);
    console.log('loop 1', i);
  }
  for (let i = 1; i <= endOfMonth; i++) {
    arrayOfDays.push(i);
    console.log('loop 2', i);
  }
  if (arrayOfDays.length <= 35) {
    const desiredLength = 35;
    for (let i = 0; (arrayOfDays.length) <= (desiredLength - 1); i++ ) {
      arrayOfDays.push(i + 1);
      console.log('loop 3', i + 1);
    }
  } else {
    const desiredLength = 42;
    for (let i = 0; (arrayOfDays.length) <= (desiredLength - 1); i++) {
      arrayOfDays.push(i + 1);
      console.log('loop 4', i + 1);
    }
  }
  console.log(arrayOfDays)
  console.log(startOfMonth, dayOfWeek);
  return arrayOfDays;
};
