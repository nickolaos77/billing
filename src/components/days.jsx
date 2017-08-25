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
    return [1, 2, 3, 4, 5, 6, 7].map(day => (
      <div key={day} className="textWrapper" >
        <h3 >{day}</h3>
      </div>
    ),
    );
  }

  render() {
    return (
      <div className="row">
        {this.renderDays()}
      </div>
    );
  }
}

export default connect(state => ({ users: state.users }))(Days);
