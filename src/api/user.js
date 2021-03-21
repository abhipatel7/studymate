/*
    This file is generic for Admin, Student and Faculty.
    Any acitons that can be combined for all type of roles should be added.
*/

import axios from '../axios';

export const loginUser = async (userEmail, password, role) => {
  const res = await axios.post(`/${role}/login`, { email: userEmail, password });
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
  const payload = {
    role,
    id,
    name,
    email,
    phoneNumber: phone_number,
    enrollmentNumber,
    departmentId,
    accessToken: access_token,
    refreshToken: refresh_token,
  };

  return payload;
};
