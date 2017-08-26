import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUserData } from '../actions/index';

class Days extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.renderDays = this.renderDays.bind(this);
  }

  renderDays() {
    return this.props.days.map((day, index) => (
      <div key={index} className="textWrapper" style={{ textAlign: 'center' }}>
        <h3 >{day}</h3>
      </div>
    ),
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

export default connect(state => ({ users: state.users, days: state.days }))(Days);
