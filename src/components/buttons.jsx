import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { selectWeek } from '../actions/index';

const Buttons = (props) => {   
  const rootUrl = 'https://timesheet-training-api.herokuapp.com/api/training/weeks/';

  const clickHandler = (status) => {
    const weekId = props.weekSelected.week_id;
    axios.post(`${rootUrl}${weekId}/users/3`, { status })
      .then(response => console.log(response))
      .catch(error => console.log(error));
    props.dispatch(selectWeek(null));
  } 

  return (
    <div className="column buttonsContainer">
      <button className="button button__success" onClick={clickHandler}>Approve</button>
      <button className="button button__danger" onClick={clickHandler}>Reject</button>
    </div>
  );
};

export default connect(state => ({
  weekSelected: state.week,
}))(Buttons);
