import React from 'react';
import { connect } from 'react-redux';
import { showNewMonth, daysArrayAG, fetchUserData } from '../actions/index';
import WeekDays from './weekdays';
import ListOfWeeks from './listOfWeeks';
import createDaysArrayUtil from '../helpers/'; 

const Calendar = (props) => {
  const clickHandler = (newMonth) => {
    props.dispatch(fetchUserData()); // clear the userdata
    props.dispatch(showNewMonth(newMonth));
    props.dispatch(daysArrayAG(createDaysArrayUtil(props.month.date)));
    if (newMonth === 'previous' && props.userData.userId) {
      props.dispatch(
        fetchUserData(props.userData.userId, props.month.monthNum));
    } else if (newMonth === 'next' && props.userData.userId) {
      props.dispatch(
        fetchUserData(props.userData.userId, props.month.monthNum + 2));
    }
  };
  return (
    <div className="column calendar">
      <div className="row spaceAround calendar__month">
        <h2
          className="textColor hover"
          onClick={() => clickHandler('previous')}
        >&#8249;</h2>
        {props.month && <h2 className="textColor">{props.month.name}</h2>}
        <h2
          className="textColor hover"
          onClick={() => clickHandler('next')}
        >&#8250;</h2>
      </div>
      <div className="column calendar__body">
        <WeekDays />
        <ListOfWeeks />
      </div>
    </div>
  );
};

export default connect(state => ({ month: state.month, userData: state.userData }))(Calendar);
