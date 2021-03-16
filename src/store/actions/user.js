import axios from '../../axios';
import * as actionTypes from './actionTypes';

export const loginUser = (email, password, role) => (dispatch) => {
  axios
    .post(`/${role}/login`, {
      email, password,
    })
    .then((res) => {
      const {
        access_token,
        refresh_token,
      } = res.data;
      const user = res.data[role];
      const {
        id,
        name,
        email,
        phone_number,
      } = user;
      let departmentId = null;
      let enrollmentNumber = null;
      if (role === 'student') {
        departmentId = user.department_id;
        enrollmentNumber = user.enrollment_number;
      } else if (role === 'faculty') {
        departmentId = user.department_id;
      }
      dispatch(
        {
          type: actionTypes.USER_LOGIN_SUCCESS,
          payload: {
            role,
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
      const message = e.msg;
      dispatch({ type: actionTypes.USER_LOGIN_FAIL, error: message });
    });
};
