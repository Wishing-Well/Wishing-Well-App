/*jshint esversion: 6*/
import {AsyncStorage} from 'react-native';
import * as types from '../lib/constants';
import * as API from '../lib/API_CALLS.js';

export const login = (email, password) => dispatch => API.login(email, password)
  .then(res => {
    if(res.success === true) {
      AsyncStorage.multiRemove(['email', 'user_id', 'loggedIn'])
      .then(() => {
        AsyncStorage.multiSet([['email', email], ['user_id', `${res.user_id}`], ['loggedIn', 'true']], (err) => {
          console.log(err);
        })
        .then(() => {
          dispatch({type: types.LOGIN_SUCCESS, email});
        });
      });
    } else {
      dispatch({type: types.LOGIN_FAIL});
    }
  })
  .catch(error => dispatch({type: types.LOGIN_FAIL, error}));

export const signup = userInfo => dispatch => API.signup(userInfo)
  .then(res => {
    console.log(res);
    if(res.success === true) {
      dispatch({type: types.SIGNUP_SUCCESS, userInfo});
    } else {
      dispatch({type: types.SIGNUP_FAIL});
    }
  })
  .catch(error => dispatch({type: types.SIGNUP_FAIL, error}));

export const loginUser = asyncArr => dispatch =>
  dispatch({type: types.LOGIN_USER, userInfo: {
    email: asyncArr[0][1],
    user_id: asyncArr[1][1]
  }});


