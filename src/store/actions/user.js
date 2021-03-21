import * as actionTypes from './actionTypes';
import { loginUser } from '../../api/user';

export const userLogin = (email, password, role) => async (dispatch) => {
  try {
    const res = await loginUser(email, password, role);
    dispatch({ type: actionTypes.USER_LOGIN_SUCCESS, payload: res });
  } catch (e) {
    const message = e.msg || 'Something went wrong.';
    dispatch({ type: actionTypes.USER_LOGIN_FAIL, error: message });
  }
};
