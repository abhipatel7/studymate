import axios from 'axios';

import * as actionTypes from './actionTypes';

export const loginUser = (email, password, user) => (dispatch) => {
  console.log(email, password);
  axios
    .post(`http://localhost:3001/api/v1/${user}/login`, {
      email, password,
    })
    .then((res) => {
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
          },
        },
      );
    })
    .catch((e) => {
      console.log(e.message);
      dispatch({ type: actionTypes.USER_LOGIN_FAIL });
    });
};
