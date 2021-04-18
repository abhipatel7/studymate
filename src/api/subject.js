import axios from '../axios';

const createSubject = async (data) => {
  const res = await axios.post('/subject', data);
  return res.data.subject;
};

export {
  createSubject,
};
