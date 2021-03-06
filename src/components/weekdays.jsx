import React from 'react';

const DayOfWeek = props => (
  <div className="textWrapper">
    <h3 className="textColor">{props.name}</h3>
  </div>
)

export default () => (
  <div className="row calendar__weekdays" style={{ textAlign: 'center' }}>
    {['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => <DayOfWeek key={day} name={day} />)}
  </div>
);
