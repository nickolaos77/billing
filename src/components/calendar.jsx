import React, { Component } from 'react';
import { connect } from 'react-redux';

import { showPreviousMonth, showNextMonth, daysArrayAG, fetchUserData } from '../actions/index';
import Days from './days';
import WeekDays from './weekdays';
import ListOfWeeks from './listOfWeeks';
import createDaysArrayUtil from '../helpers/'; 

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.createDaysArray = this.createDaysArray.bind(this);
  }

  createDaysArray(Month) {
    return createDaysArrayUtil(Month);
  }

  render() {
    return (
      <div className="column fixWidthCol">
        <div className="row">
          <h2
            className="textColor hover"
            onClick={() => {
              this.props.dispatch(fetchUserData()); // clear the userdata
              this.props.dispatch(showPreviousMonth());
              this.props.dispatch(daysArrayAG(this.createDaysArray(this.props.month.date)));
              if (this.props.userData.userId) {
              this.props.dispatch(
                fetchUserData(this.props.userData.userId, this.props.month.monthNum));
              }
            }
            }
          >&#171;</h2>
          {this.props.month && <h2 className="textColor">{this.props.month.name}</h2>}
          <h2
            className="textColor hover"
            onClick={() => {
              this.props.dispatch(fetchUserData()); // clear the userdata
              this.props.dispatch(showNextMonth());
              this.props.dispatch(daysArrayAG(this.createDaysArray(this.props.month.date)));
              if (this.props.userData.userId) {
              this.props.dispatch(
                fetchUserData(this.props.userData.userId, this.props.month.monthNum + 2));
              }
            }
            }
          >&#187;</h2>
        </div>
        <WeekDays />
        <ListOfWeeks />
        {/* <Days /> */}
      </div>
    );
  }
}

export default connect(state => ({ month: state.month, userData: state.userData }))(Calendar);
