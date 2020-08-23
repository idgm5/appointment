import { combineReducers } from 'redux';
import bikes from './bikes';
import user from './user';
import appointments from './appointments';

export default combineReducers({
  bikes,
  user,
  appointments
});
