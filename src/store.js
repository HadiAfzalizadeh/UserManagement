import { createStore } from 'redux';
import UserService from './userService';

let defaultUsers = {
  users: await UserService.getUsers(),
  editableUser: {
    id: null,
    name: '',
    surname: '',
    melicode: '',
    username: '',
    email: '',
    password: '',
    repeatPassword: '',
  },
  addEditType: 'add',
};

const usersReducer = (state = defaultUsers, action) => {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        users: action.data,
        editableUser: {
          id: '',
          name: '',
          surname: '',
          melicode: '',
          username: '',
          email: '',
          password: '',
          repeatPassword: '',
        },
      };
    case 'delete':
      return {
        ...state,
        users: action.data,
      };
    case 'edit':
      return {
        ...state,
        users: action.data,
        editableUser: {
          id: '',
          name: '',
          surname: '',
          melicode: '',
          username: '',
          email: '',
          password: '',
          repeatPassword: '',
        },
      };
    case 'loadAdd':
      return {
        ...state,
        editableUser: {
          id: '',
          name: '',
          surname: '',
          melicode: '',
          username: '',
          email: '',
          password: '',
          repeatPassword: '',
        },
        addEditType: 'add',
      };
    case 'loadEdit':
      return {
        ...state,
        editableUser: action.data,
        addEditType: 'edit',
      };
    default:
      return state;
  }
};

export default createStore(usersReducer);
