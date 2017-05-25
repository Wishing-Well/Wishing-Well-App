/*jshint esversion: 6*/
import { combineReducers } from 'redux';
import users from './UserReducers';
import wells from './WellReducers';
import errors from './ErrorReducers';

const reducers = combineReducers({
  users,
  wells,
  errors
});

export default reducers;