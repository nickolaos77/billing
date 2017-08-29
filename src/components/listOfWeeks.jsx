import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Week from './week';

const ListOfWeeks = ({ month, days, userData }) => {
  const renderWeeks = () => {
    const createWeek = (i, firstWeekOfMonth, j = 0, passData = true) =>
      (<Week
        className="row"
        key={i}
        currentWeek={(firstWeekOfMonth && i >= 0) ? (firstWeekOfMonth + i) : null}
        weekData={(userData.weeks && passData) ? userData.weeks[i - j] : null}
        days={(days.length > 0 && i >= 0)
          ? days.slice(7 * i, (7 * i) + 7)
          : null}
      />
      );

    if (month) {
      var firstWeekOfMonth = moment(month.date).startOf('month').isoWeek();
      var lastWeekOfMonth = moment(month.date).endOf('month').isoWeek();
    }
    const weeks = [];
    let weekNumberOfFirstWeekOfMonth = firstWeekOfMonth;
    let weeksNumbersReconcilationDone = false;
    // at first render this if is executed
    if (days.length > 0 && !userData.weeks) { 
      const numOfWeeks = days.length / 7;
      for (let i = 0; i < numOfWeeks; i++) {
        weeks.push(createWeek(i, firstWeekOfMonth));
      }
    } else if (days.length > 0 && userData.weeks.length !==0) {
      // at the beginning of the new year or when the first week of this month has already been 
      // appended to the previous month do this reconcilation
      if ((weekNumberOfFirstWeekOfMonth < userData.weeks[0].week_number)
      || weekNumberOfFirstWeekOfMonth >= 51) {
        weekNumberOfFirstWeekOfMonth++;
        weeksNumbersReconcilationDone = true;
        const i = 0;
        weeks.push(createWeek(i, undefined, undefined, false));         
      } // if there has not been a reconcilation
      if (weeksNumbersReconcilationDone === false) { 
        const numOfWeeks = days.length / 7;
        for (let i = 0; i <= numOfWeeks; i++) {
          weeks.push(createWeek(i, firstWeekOfMonth));
        }
      } else {// if there has been a reconcilation skip one week
        const numOfWeeks = days.length / 7;
        for (let i = 1; i <= numOfWeeks; i++) {
          weeks.push(createWeek(i, firstWeekOfMonth,1));
        }
      }
    }
    return weeks;
  }


  return (
    <div className="column calendar__days">
      {renderWeeks()}
    </div>
  );
}

export default connect(state => ({
  month: state.month,
  days: state.days,
  userData: state.userData,
}))(ListOfWeeks);
