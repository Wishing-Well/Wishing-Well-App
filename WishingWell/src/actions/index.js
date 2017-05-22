/*jshint esversion: 6*/
import * as types from '../lib/constants';
import * as API from '../lib/API_CALLS.js';

export const login = (username, password) => dispatch => db.login(username, password)
  .then(user => {
    dispatch({type: types.LOGIN_SUCCESS, user});
    dispatch({type: types.NAVIGATE, routeName: 'MapPage'});
  })
  .catch(err => dispatch({type: types.LOGIN_FAIL}));

export const signup = userInfo => dispatch => db.signup(userInfo)
  .then(user => {
    dispatch({type: types.SIGNUP_SUCCESS, user});
    dispatch({type: types.NAVIGATE, routeName: 'MapPage'});
  })
  .catch(err => dispatch({type: types.SIGNUP_FAIL}));

export const navigate = routeName => dispatch => dispatch({type: types.NAVIGATE, routeName});