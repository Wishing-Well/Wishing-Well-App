/*jshint esversion: 6*/
import { combineReducers } from 'redux';
import app from './AppReducers';

const reducers = combineReducers({
  app
});

export default reducers;