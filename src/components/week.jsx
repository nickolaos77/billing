import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectWeek } from '../actions/index';

class Week extends Component {
  constructor(props) {
    super(props);
    this.state = { class: 'row week' };
    this.renderDays = this.renderDays.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentWillReceiveProps(props) {
    if (this.state.class === 'row week week--selected' && !props.weekSelected) {
      this.setState({ class: 'row week' });
    }
  }

  clickHandler() {
    if (this.state.class === 'row week' && !this.props.weekSelected && this.props.userData.weeks) {
      this.props.dispatch(selectWeek(this.props.weekData)); 
      this.setState({ class: 'row week week--selected' });
    } else if (this.state.class === 'row week week--selected' && this.props.weekSelected) {
      this.props.dispatch(selectWeek(null)); 
      this.setState({ class: 'row week' });
    } else if (this.state.class === 'row week week--selected' && !this.props.weekSelected) {
      this.setState({ class: 'row week' });
    }
  }

  renderDays() {
    return this.props.days.map((day, index) => {
      if (this.props.weekData) {
        return (
          <div key={day} className="textWrapper column">
            <h3>{day}</h3>
            <h5>
              {this.props.weekData.days_in_week[index].hours}:{this.props.weekData.days_in_week[index].minutes}
            </h5>
          </div>
        );
      }
      if (!this.props.weekData) {
        return (
          <div key={day} className="textWrapper column">
            <h3 className="textColor ">{day}</h3>
          </div>
        );
      }
    });
  }

  render() {
    return (
      <div className={this.state.class} onClick={this.clickHandler}>
        {this.renderDays()}
      </div>
    );
  }
}

export default connect(state => ({
  weekSelected: state.week,
  userData: state.userData,
}))(Week);
