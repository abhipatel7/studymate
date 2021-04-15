import axios from '../axios';

const createNotice = async (title, description, department, term) => {
  const res = await axios.post('/noticeboard', {
    title, description, department, term,
  });
  return res.data.notice;
};

const getNotice = async (url) => {
  const res = await axios.get(url);
  return res.data.notices;
};

const deleteNotice = async (id) => {
  const res = await axios.delete(`/noticeboard?notice=${id}`);
  return res.data.notice;
};

export {
  createNotice,
  getNotice,
  deleteNotice,
};
