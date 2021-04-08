import axios from '../axios';

export const createDepartment = async (name, code, faculties, terms, fees) => {
  const res = await axios.post('/department', {
    name, code, tutionFee: fees, terms, faculties,
  });
  return res;
};
