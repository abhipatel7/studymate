import { initial } from 'lodash';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
  id: null,
  role: null,
  name: null,
  email: null,
  phoneNumber: null,
  enrollmentNumber: null,
  departmentId: null,
  accessToken: null,
  refreshToken: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN_REQUEST:
      return {
        ...state,
      };
    case actionTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case actionTypes.USER_LOGIN_FAIL:
      return {
        ...initialState,
      };
    case actionTypes.USER_LOGOUT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default userReducer;
