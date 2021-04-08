import axios from '../axios';

const createDepartment = async (name, code, faculties, terms, fees) => {
  const res = await axios.post('/department', {
    name, code, tutionFee: fees, terms, faculties,
  });
  return res;
};

const getDepartments = async (url) => {
  const res = await axios.get(url);
  return res.data.departments;
};

export {
  createDepartment,
  getDepartments,
};
