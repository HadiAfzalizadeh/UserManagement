import axios from 'axios';
const Server_URL = 'http://localhost:3001/users';

const getUsers = async () => {
  return axios.get(Server_URL).then((response) => {
    return response.data;
  });
};

const addUser = async (data) => {
  return axios.post(Server_URL, data);
};

const UserService = {
  getUsers,
  addUser,
};

export default UserService;
