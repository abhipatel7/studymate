import axios from '../axios';

const createStudent = async (name, email, enrollmentNumber, phoneNumber, department, term) => {
  const res = await axios.post('/student/signup', {
    name, email, enrollmentNumber, phoneNumber, departmentId: department, termId: term,
  });
  return res.data.student;
};

export {
  createStudent,
};
