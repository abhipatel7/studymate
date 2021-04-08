import axios from '../axios';

const createStudent = async (name, email, enrollmentNumber, phoneNumber, department) => {
  const res = await axios.post('/student/signup', {
    name, email, enrollmentNumber, phoneNumber, departmentId: department,
  });
  return res.data.student;
};

export {
  createStudent,
};
