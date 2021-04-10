import axios from '../axios';

const getTermsByDepartment = async (url) => {
  const res = await axios.get(url);
  return res.data.terms;
};

export {
  getTermsByDepartment,
};
