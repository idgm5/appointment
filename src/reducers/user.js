import { ADD_USER } from '../actions/index';

function user(state = '', action) {
  switch (action.type) {
    case ADD_USER:
      return action.user;
    default:
      return state;
  }
}

export default user;
