import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001/api/v1',
});

instance.interceptors.response.use((res) => {
  const { data } = res.data;
  const { msg } = res.data.data;
  res.data = data;
  res.msg = msg;
  return Promise.resolve(res);
}, (err) => {
  // eslint-disable-next-line no-param-reassign
  err.msg = err.response.data.msg || 'something went wrong.';
  return Promise.reject(err);
});

export default instance;
