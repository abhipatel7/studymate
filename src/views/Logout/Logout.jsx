import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import * as actionTypes from '../../store/actions/actionTypes';

export default function Logout() {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: actionTypes.USER_LOGOUT });
    // eslint-disable-next-line no-undef
    localStorage.removeItem('user');
    history.push('/');
  }, [dispatch, history]);

  return (
    <div>Logging out...</div>
  );
}
