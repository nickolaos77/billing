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

//   onChange(e) {
//     this.props.dispatch(fetchUserData(e.target.value, this.props.month.monthNum + 1));
//     console.log(e.target.value);
//     this.setState({ value: e.target.value });
//   } this.props.dispatch(fetchUserData());
  componentWillReceiveProps(props) {
    console.log("component will receive props")
    if (this.state.class === 'row week week--selected' && !props.weekSelected) {
      this.setState({ class: 'row week' });
    }
  }

  clickHandler() {
    if (this.state.class === 'row week' && !this.props.weekSelected && this.props.userData.weeks) {
      console.log("this.props.userData clickHandler", this.props.userData)
      this.props.dispatch(selectWeek(this.props.weekData)); 
      this.setState({ class: 'row week week--selected' });
    } else if (this.state.class === 'row week week--selected' && this.props.weekSelected) {
      this.props.dispatch(selectWeek(null)); 
      this.setState({ class: 'row week' });
    } else if (this.state.class === 'row week week--selected' && !this.props.weekSelected) {
      this.setState({ class: 'row week' });
    }
    console.log(this.props.week);
  }

  renderDays() {
      console.log('inside week', this.props.weekData)
    return this.props.days.map((day, index) => {
      if (this.props.weekData) {
        return (
          <div key={day} className="textWrapper column">
            <h3>{day}</h3>
            <h5>{this.props.weekData.days_in_week[index].id}</h5>
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
