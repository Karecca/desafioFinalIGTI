import http from '../http-common';

async function get(period) {
  return await http.get(`/transaction?period=${period}`);
}
const create = (data) => {
  return http.post('/transaction', data);
};

const update = async (id, data) => {
  return await http.put(`/transaction/${id}`, data);
};

const remove = async (id) => {
  return await http.delete(`/transaction/${id}`);
};

const findByName = (name) => {
  return http.get(`/grade?name=${name}`);
};

export { get, create, update, remove, findByName };
