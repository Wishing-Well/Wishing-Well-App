/*jshint esversion: 6*/
import { combineReducers } from 'redux';
import users from './UserReducers';
import wells from './WellReducers';
import errors from './ErrorReducers';
import game from './GameReducers';

const reducers = combineReducers({
  users,
  wells,
  errors,
  game
});

export default reducers;