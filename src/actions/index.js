import axios from 'axios';

import {
  FETCH_USERS,
  FETCH_USER_DATA,
  CURRENT_MONTH,
  NEW_MONTH,
  DAYS_ARRAY,
  SELECT_WEEK,
} from './types';

const ROOT_URL = 'https://timesheet-training-api.herokuapp.com/api/';

// the errorHandler comes from the axios documentation
const errorHandler = (error) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log(error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error', error.message);
  }
  console.log(error.config);
};

export const fetchUsers = () =>
  (dispatch) => {
    const url = `${ROOT_URL}users`;
    return axios.get(url)
      .then((response) => {
        dispatch({
          type: FETCH_USERS,
          payload: response,
        });
      })
      .catch(error => errorHandler(error));
  };


export const fetchUserData = (userId, month) => {
  if (userId && month) {
    return (dispatch) => {
      const url = `${ROOT_URL}training/weeks/${month}/${2017}/${userId}`;
      return axios.get(url)
        .then((response) => {
          const weeks = response.data.data.weeks
            .sort((weekA, weekB) => weekA.week_number - weekB.week_number);
          weeks.forEach(week => week.days_in_week.sort((dayA, dayB) => dayA.id - dayB.id));
          dispatch({
            type: FETCH_USER_DATA,
            payload: { weeks, userId },
          });
        })
        .catch(error => errorHandler(error));
    };
  } else if (!userId || !!month) {
    return { type: FETCH_USER_DATA, payload: {} };
  }
};

export const showCurrentMonth = () => ({
  type: CURRENT_MONTH,
});

export const showNewMonth = newMonth => ({
  type: NEW_MONTH,
  payload: newMonth,
});

export const daysArrayAG = daysArray => ({
  type: DAYS_ARRAY,
  payload: daysArray,
});

export const selectWeek = week => ({
  type: SELECT_WEEK,
  payload: week,
});
