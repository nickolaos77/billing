import React, { Component } from 'react';
import { connect } from 'react-redux';

class Week extends Component {
  constructor(props) {
    super(props);
    // this.state = { value: '' };
    this.renderDays = this.renderDays.bind(this);
    // this.onChange = this.onChange.bind(this);
  }

//   onChange(e) {
//     this.props.dispatch(fetchUserData(e.target.value, this.props.month.monthNum + 1));
//     console.log(e.target.value);
//     this.setState({ value: e.target.value });
//   }

  renderDays() {
      console.log('inside week', this.props.weekData)
    return this.props.days.map((day, index) => {
      if (this.props.weekData) {
        return (
          <div key={day} className="textWrapper">
            <h3 >{day}</h3>
            <h5 style={{ margin: 0 }}>{this.props.weekData.days_in_week[index].id}</h5>
          </div>
        );
      }
      if (!this.props.weekData) {
        return (
          <div key={day} className="textWrapper">
            <h3 >{day}</h3>
            <h5 style={{ margin: 0 }} />
          </div>
        );

    }
    });
  }// <h4 className="fixedWidthElement">Day1</h4>

  render() {
    return (
      <div className="row">
        {this.renderDays()}
      </div>
    );
  }
}

export default connect()(Week);
