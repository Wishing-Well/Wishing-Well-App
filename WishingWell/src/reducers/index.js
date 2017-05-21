/*jshint esversion: 6*/
import { combineReducers } from 'redux';
import users from './UserReducers';
import nav from './navReducer';

const reducers = combineReducers({
  users,
  nav
});

export default reducers;