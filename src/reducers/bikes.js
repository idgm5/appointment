import { ADD_BIKE } from '../actions/index';

function bikes(state = [], action) {
  switch (action.type) {
    case ADD_BIKE:
      return [
        ...state,
        ...action.bike,
      ];
    default:
      return state;
  }
}

export default bikes;
