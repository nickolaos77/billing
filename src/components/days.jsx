import React, { Component } from 'react';
import { connect } from 'react-redux';

class Days extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.renderDays = this.renderDays.bind(this);
  }

  renderDays() {
    function findCallback(dayObject, dayNumber) {
      console.log(dayObject, dayNumber);
      if (dayObject.day_number === dayNumber) {
        return true;
      }
    }
    var daysObjects = this.props.userData
      .map(week => week.days_in_week)
      .reduce((a, b) => a.concat(b), []); // flatten the array;
    if (daysObjects.length > 0) {
      var dayNumberOfFirstDay = daysObjects[0].day_number;
      var indexOfFirstDay = this.props.days.indexOf(dayNumberOfFirstDay);  
    }
    var indexOfCurrentObject;
    console.log('daysObjects', daysObjects);
    return this.props.days.map((day, mapIndex) => {
      const curDayObj = daysObjects.find((dayObject, findIndex ) => {
        indexOfCurrentObject = findIndex;
        return findCallback(dayObject, day);
      });
      if (curDayObj && mapIndex >= indexOfFirstDay) {
        daysObjects = [...daysObjects.slice(0, indexOfCurrentObject), ...daysObjects.slice(indexOfCurrentObject + 1)];
        return (
          <div key={mapIndex} className="textWrapper">
            <h3 >{day}</h3>
            <h5 style={{ margin: 0 }}>
              { curDayObj.id }
            </h5>
          </div>
        );
      } else {
        return (
          <div key={mapIndex} className="textWrapper">
            <h3 >{day}</h3>
            <h5 style={{ margin: 0 }}>&nbsp;</h5>
          </div>
        );
      } // else
    }
    );
  }

  render() {
    return (
      <div className="row width280">
        {this.renderDays()}
      </div>
    );
  }
}

export default connect(state => ({
  users: state.users,
  days: state.days,
  userData: state.userData,
}))(Days);
