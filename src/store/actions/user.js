import axios from 'axios';

import * as actionTypes from './actionTypes';

export const loginUser = (email, password, user) => (dispatch) => {
  axios
    .post(`http://localhost:3001/api/v1/${user}/login`, {
      email, password,
    })
    .then((res) => {
      const {
        access_token,
        refresh_token,
      } = res.data.data;
      res = res.data.data[user];
      const {
        id,
        name,
        email,
        phone_number,
      } = res;
      let departmentId = null;
      let enrollmentNumber = null;
      if (user === 'student') {
        departmentId = res.department_id;
        enrollmentNumber = res.enrollment_number;
      } else if (user === 'faculty') {
        departmentId = res.department_id;
      }
      dispatch(
        {
          type: actionTypes.USER_LOGIN_SUCCESS,
          payload: {
            role: user,
            id,
            name,
            email,
            phoneNumber: phone_number,
            enrollmentNumber,
            departmentId,
            accessToken: access_token,
            refreshToken: refresh_token,
          },
        },
      );
    })
    .catch((e) => {
      const message = e.response.data.msg || 'Something went wrong';
      dispatch({ type: actionTypes.USER_LOGIN_FAIL, error: message });
    });
};
