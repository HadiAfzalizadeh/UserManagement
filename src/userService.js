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

const filterUsers = async (data) => {
  let filterUrl = Server_URL.slice(0, Server_URL.length - 1).concat('?');
  if (data.id != null) {
    filterUrl = filterUrl.concat('id_like=').concat(data.id).concat('&');
  }
  if (data.name !== '') {
    filterUrl = filterUrl.concat('name_like=').concat(data.name).concat('&');
  }
  if (data.surname !== '') {
    filterUrl = filterUrl
      .concat('surname_like=')
      .concat(data.surname)
      .concat('&');
  }
  if (data.username !== '') {
    filterUrl = filterUrl
      .concat('username_like=')
      .concat(data.username)
      .concat('&');
  }
  if (data.email !== '') {
    filterUrl = filterUrl.concat('email_like=').concat(data.email).concat('&');
  }
  console.log(filterUrl);
  return axios.get(filterUrl).then((response) => {
    return response.data;
  });
};

const UserService = {
  getUsers,
  getUserByID,
  addUser,
  deleteUser,
  editUser,
  filterUsers,
};

export default UserService;
