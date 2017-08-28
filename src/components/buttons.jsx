import React, { Component } from 'react';
import { connect } from 'react-redux';

class Buttons extends Component {
  render() {
    return (
      <div className="column buttonsContainer">
        <button className = "button button__success">Approve</button>
        <button className = "button button__danger">Reject</button>
      </div>
    );
  }
}

export default connect()(Buttons);
