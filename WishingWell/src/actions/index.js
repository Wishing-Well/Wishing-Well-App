/*jshint esversion: 6*/
import {AsyncStorage} from 'react-native';
import * as types from '../lib/constants';
import * as API from '../lib/API_CALLS.js';

export const login = (email, password) => dispatch => API.login(email, password)
  .then(res => {
    console.log(res);
    if(res.success === true) {
      console.log('first');
      AsyncStorage.multiRemove(['email', 'user_id', 'loggedIn'])
      .then(() => {
        console.log('second');
        AsyncStorage.multiSet([['email', email], ['user_id', `${res.user_id}`], ['loggedIn', 'true']], (err) => {
          console.log(err);
        })
        .then(() => {
          console.log('three');
          dispatch({type: types.LOGIN_SUCCESS, email});
          dispatch({type: types.NAVIGATE, routeName: 'MapPage'});
        });
      });
    } else {
      dispatch({type: types.LOGIN_FAIL});
    }
  })
  .catch(error => dispatch({type: types.LOGIN_FAIL, error}));

export const signup = userInfo => dispatch => API.signup(userInfo)
  .then(res => {
    if(res.success === true) {
      dispatch({type: types.SIGNUP_SUCCESS, userInfo});
      dispatch({type: types.NAVIGATE, routeName: 'MapPage'});
    } else {
      dispatch({type: types.SIGNUP_FAIL});
    }
  })
  .catch(error => dispatch({type: types.SIGNUP_FAIL, error}));

export const navigate = routeName => dispatch => dispatch({type: types.NAVIGATE, routeName});