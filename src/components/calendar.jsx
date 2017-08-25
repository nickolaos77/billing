import React, { Component } from 'react';
import { connect } from 'react-redux';

import { showPreviousMonth, showNextMonth } from '../actions/index';
import Days from './days';
import WeekDays from './weekdays';

class Calendar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="column">
        <div className="row expandHor">
          <h2
            className="textColor hover"
            onClick={() => this.props.dispatch(showPreviousMonth())}
          >&#171;</h2>
          {this.props.month && <h2 className="textColor">{this.props.month.name}</h2>}
          <h2
            className="textColor hover"
            onClick={() => this.props.dispatch(showNextMonth())}
          >&#187;</h2>
        </div>
        <WeekDays />
        <Days />
      </div>
    )
  }
}

export default connect(state => ({ month: state.month }))(Calendar);
