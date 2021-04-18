import axios from '../axios';

const createSubject = async (data) => {
  const res = await axios.post('/subject', data);
  return res.data.subject;
};

const getSubject = async (url) => {
  const res = await axios.get(url);
  return res.data.subjects;
};

const deleteSubject = async (id) => {
  const res = await axios.delete(`/subject?subject=${id}`);
  return res.data.subject;
};

export {
  createSubject,
  getSubject,
  deleteSubject,
};
