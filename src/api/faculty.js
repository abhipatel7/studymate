import axios from '../axios';

const createFaculty = async (name, email, phoneNumber, department) => {
  const res = await axios.post('/faculty/signup', {
    name, email, phoneNumber, departmentId: department,
  });
  return res.data.faculty;
};

export {
  createFaculty,
};
