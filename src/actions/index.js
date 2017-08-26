import axios from 'axios';

import {
  FETCH_USERS,
  FETCH_USER_DATA,
  CURRENT_MONTH,
  NEXT_MONTH,
  PREVIOUS_MONTH,
  DAYS_ARRAY,
} from './types';

const ROOT_URL = 'https://timesheet-training-api.herokuapp.com/api/';

// the errorHandler comes from the axios documentation
function errorHandler(error) {
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
}

export const fetchUsers = () =>
  (dispatch) => {
    const url = `${ROOT_URL}users`;
    axios.get(url)
      .then((response) => {
        dispatch({
          type: FETCH_USERS,
          payload: response,
        });
      })
      .catch(error => errorHandler(error));
  };


export const fetchUserData = (userId, month) =>
  (dispatch) => {
    const url = `${ROOT_URL}training/weeks/${5}/${2017}/${userId}`;
    axios.get(url)
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: FETCH_USER_DATA,
          payload: response,
        });
      })
      .catch(error => errorHandler(error));
  };

export const showCurrentMonth = () => ({
  type: CURRENT_MONTH,
});

export const showNextMonth = () => ({
  type: NEXT_MONTH,
});

export const showPreviousMonth = () => ({
  type: PREVIOUS_MONTH,
});

export const daysArrayAG = daysArray => ({
  type: DAYS_ARRAY,
  payload: daysArray,
});
