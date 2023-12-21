import axios from 'axios';
const Server_URL = 'http://localhost:3001/users/';

const getUsers = async () => {
  return axios.get(Server_URL).then((response) => {
    return response.data;
  });
};

const getUserByID = async (id) => {
  return axios.get(Server_URL + id).then((response) => {
    return response.data;
  });
};

const addUser = async (data) => {
  return axios.post(Server_URL, data);
};

const deleteUser = async (id) => {
  return axios.delete(Server_URL + id);
};

const editUser = async (data) => {
  return axios.put(Server_URL + data.id, data);
};

const UserService = {
  getUsers,
  getUserByID,
  addUser,
  deleteUser,
  editUser,
};

export default UserService;
