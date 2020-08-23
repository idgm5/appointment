import { ADD_APPOINTMENT } from '../actions/index';

function appointments(state = [], action) {
  switch (action.type) {
    case ADD_APPOINTMENT:
      return [
        ...state,
        action.appointment,
      ];
    default:
      return state;
  }
}

export default appointments;
