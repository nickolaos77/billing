import React, { Component } from 'react';
import { connect } from 'react-redux';

class Days extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.renderDays = this.renderDays.bind(this);
  }

  renderDays() {
    
    const daysWithHours = this.props.userData.map(week => week.days_in_week);
    function manipulateObject(object) {
      
    }
    console.log('daysWithHours', daysWithHours);
    return this.props.days.map((day, index) => {
      if (true) { 
        return (
          <div key={index} className="textWrapper" style={{ textAlign: 'center' }}>
            <h3 >{day}</h3>
            <h5 style={{ margin: 0 }}>0</h5>
          </div>
        );
      }
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
