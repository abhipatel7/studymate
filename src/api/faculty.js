import axios from '../axios';

const createFaculty = async (name, email, phoneNumber, department) => {
  const res = await axios.post('/faculty/signup', {
    name, email, phoneNumber, departmentId: department,
  });
  return res.data.faculty;
};

const getUnassignedFaculties = async (url) => {
  const res = await axios.get(url);
  return res.data.faculties;
};

const getFaculties = async (url) => {
  const res = await axios.get(url);
  return res.data.faculties;
};

const deleteFaculty = async (id) => {
  const res = await axios.delete(`/faculty?faculty=${id}`);
  return res.data.faculty;
};

export {
  createFaculty,
  getUnassignedFaculties,
  getFaculties,
  deleteFaculty,
};
