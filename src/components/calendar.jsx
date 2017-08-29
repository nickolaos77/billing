import React from 'react';
import { connect } from 'react-redux';
import { showNewMonth, daysArrayAG, fetchUserData } from '../actions/index';
import WeekDays from './weekdays';
import ListOfWeeks from './listOfWeeks';
import createDaysArrayUtil from '../helpers/'; 

const Calendar = ({ dispatch, month, userData }) => {
  const clickHandler = (newMonth) => {
    dispatch(fetchUserData()); // clear the userdata
    dispatch(showNewMonth(newMonth));
    dispatch(daysArrayAG(createDaysArrayUtil(month.date)));
    if (newMonth === 'previous' && userData.userId) {
      dispatch(
        fetchUserData(userData.userId, month.monthNum));
    } else if (newMonth === 'next' && userData.userId) {
      dispatch(
        fetchUserData(userData.userId, month.monthNum + 2));
    }
  };
  return (
    <div className="column calendar">
      <div className="row spaceAround calendar__month">
        <button
          className="button--arrow hover"
          onClick={() => clickHandler('previous')}
        >&#8249;</button>
        {month && <h2 className="textColor">{month.name}</h2>}
        <button
          className="button--arrow hover"
          onClick={() => clickHandler('next')}
        >&#8250;</button>
      </div>
      <div className="column calendar__body">
        <WeekDays />  {/* no children */}
        <ListOfWeeks />  {/* no children */}
      </div>
    </div>
  );
};

export default connect(state => ({ month: state.month, userData: state.userData }))(Calendar);
