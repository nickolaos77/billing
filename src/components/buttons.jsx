import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { selectWeek } from '../actions/index';

class Buttons extends Component {
  constructor(props){
    super(props);
    this.state = { url:'https://timesheet-training-api.herokuapp.com/api/training/weeks/' }
    this.onApprove = this.onApprove.bind(this);
    this.onReject = this.onReject.bind(this);
  }

  onApprove() {
    // this.props.weekSelected.status = 'approved';
    // this.props.weekSelected.approved_by_id = 3;
    const weekId = this.props.weekSelected.week_id;
    // console.log('trying to post at');
    // console.log(`${this.state.url}${weekId}/users/3`);
    axios.post(`${this.state.url}${weekId}/users/3`, {"status":"approved"})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    this.props.dispatch(selectWeek(null));
  }  

  onReject() {
    // this.props.weekSelected.status = 'rejected';
    // delete this.props.weekSelected.approved_by_id;
    // this.props.weekSelected.rejected_by_id = 3;
    const weekId = this.props.weekSelected.week_id;   
        axios.post(`rootUrl${weekId}/users/3`,  {"status":"rejected"})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      }); 
    console.log("week rejected",this.props.weekSelected);
    this.props.dispatch(selectWeek(null));
  }  

  render() {
    return (
      <div className="column buttonsContainer">
        <button className = "button button__success" onClick={this.onApprove}>Approve</button>
        <button className = "button button__danger" onClick={this.onReject}>Reject</button>
      </div>
    );
  }
}

export default connect(state => ({
  weekSelected: state.week,
}))(Buttons);
