import axios from '../axios';

const createStudent = async (name, email, enrollmentNumber, phoneNumber, department, term) => {
  const res = await axios.post('/student/signup', {
    name, email, enrollmentNumber, phoneNumber, departmentId: department, termId: term,
  });
  return res.data.student;
};

const getStudent = async (url) => {
  const res = await axios.get(url);
  return res.data.students;
};

const deleteStudent = async (id) => {
  const res = await axios.delete(`/student?student=${id}`);
  return res.data.student;
};

export {
  createStudent,
  getStudent,
  deleteStudent,
};
