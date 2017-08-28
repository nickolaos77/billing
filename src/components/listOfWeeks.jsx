import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Week from './week';

class ListOfWeeks extends Component {
  constructor(props) {
    super(props);
    this.renderWeeks = this.renderWeeks.bind(this);
  }
  renderWeeks() {
    if (this.props.month) {
      var firstWeekOfMonth = moment(this.props.month.date).startOf('month').isoWeek();
      var lastWeekOfMonth = moment(this.props.month.date).endOf('month').isoWeek();
      console.log('first week and last week', firstWeekOfMonth, lastWeekOfMonth);
    }
    const weeks = [];
    var weekNumberOfFirstWeekOfMonth = firstWeekOfMonth;
    var weeksNumbersReconcilationDone = false;
    if (this.props.days.length > 0 && !this.props.userData.weeks) { // at first load this if is executed
      const numOfWeeks = this.props.days.length / 7;
      for (let i = 0; i < numOfWeeks; i++) {
        console.log("extra week from 1");
        weeks.push(<Week
          className="row"
          key={i}
          currentWeek={firstWeekOfMonth + i}
          days={this.props.days.slice(7 * i, (7 * i) + 7)}
        />);
      }
    } else if (this.props.days.length > 0 && this.props.userData.weeks.length !==0) {
        if (weekNumberOfFirstWeekOfMonth < this.props.userData.weeks[0].week_number) {
        weekNumberOfFirstWeekOfMonth++;
        weeksNumbersReconcilationDone = true;
        console.log("extra week from 2");
        weeks.push(<Week
          className="row"
          key="firstWeek"
          days={this.props.days.slice(0, 7)}
        />);          
      } 
      if ( weeksNumbersReconcilationDone===false ) { // if there has not been a reconcilation
        const numOfWeeks = this.props.days.length / 7;
        for (let i = 0; i <= numOfWeeks; i++) {
          console.log("extra week from 3");
          console.log(this.props.userData.weeks[i]); 
          weeks.push(<Week
            className="row"
            key={i}
            currentWeek={firstWeekOfMonth+i}
            weekData={this.props.userData.weeks[i]}
            days={this.props.days.slice(7 * i, 7 * i + 7)} />);
        }
      } else {//if there has been a reconcilation skip one week
        const numOfWeeks = this.props.days.length / 7;
        for (let i = 1; i <= numOfWeeks; i++) {
          console.log("extra week from 4");
          console.log(this.props.userData.weeks[i-1]); 
          weeks.push(<Week
            className="row"
            key={i}
            currentWeek={firstWeekOfMonth+i}
            weekData={this.props.userData.weeks[i-1]}
            days={this.props.days.slice(7 * i, 7 * i + 7)} />);
        }
      }
    }
    return weeks;
  }

  render() {
    return (
      <div className="column calendar__days">
        {this.renderWeeks()}
      </div>
    );
  }
}

export default connect(state => ({
  users: state.users,
  month: state.month,
  days: state.days,
  userData: state.userData,
}))(ListOfWeeks);