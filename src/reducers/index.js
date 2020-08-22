import { combineReducers } from 'redux';
import bikes from './bikes';
import user from './user';

export default combineReducers({
  bikes,
  user
});
