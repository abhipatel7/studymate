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

const deleteDepartment = async (id) => {
  const res = await axios.delete(`/department?department=${id}`);
};

const editDepartment = async (id, name, code, tutionFee) => {
  const res = await axios.patch('/department', {
    id, name, code, tutionFee,
  });
  return res.data.department;
};

export {
  createDepartment,
  getDepartments,
  deleteDepartment,
  editDepartment,
};
