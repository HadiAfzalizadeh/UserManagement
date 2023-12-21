import { createStore } from 'redux';
import UserService from './userService';

let defaultUsers = {
  users: await UserService.getUsers(),
};

const usersReducer = (state = defaultUsers, action) => {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        users: action.data,
      };
    // case 'minus':
    //   return {
    //     ...state,
    //   };
    default:
      return state;
  }
};

export default createStore(usersReducer);
