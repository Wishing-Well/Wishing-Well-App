/*jshint esversion: 6*/
import { combineReducers } from 'redux';
import users from './UserReducers';

const reducers = combineReducers({
  users
});

export default reducers;