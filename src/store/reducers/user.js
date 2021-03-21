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
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loading: false,
        error: null,
      };
    case actionTypes.USER_LOGIN_FAIL:
      return {
        ...initialState,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default userReducer;
