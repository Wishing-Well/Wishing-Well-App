/*jshint esversion: 6*/
import * as types from '../lib/constants';
import * as API from '../lib/API_CALLS.js';

export const login = (email, password) => dispatch => API.login(email, password)
  .then(res => {
    console.log(res);
    if(res.success === true) {
      AsyncStorage.setItem('email', email);
      AsyncStorage.setItem('loggedIn', true);
      dispatch({type: types.LOGIN_SUCCESS, email});
      dispatch({type: types.NAVIGATE, routeName: 'MapPage'});
    } else {
      dispatch({type: types.LOGIN_FAIL});
    }
  })
  .catch(err => dispatch({type: types.LOGIN_FAIL}));

export const signup = userInfo => {
  return dispatch => {
    return API.signup(userInfo)
    .then(res => {
      console.log(res);
      if(res.success === true) {
        dispatch({type: types.SIGNUP_SUCCESS, user});
        dispatch({type: types.NAVIGATE, routeName: 'MapPage'});
      } else {
        dispatch({type: types.SIGNUP_FAIL});
      }
    })
    .catch(err => dispatch({type: types.SIGNUP_FAIL}));
  };
};

export const navigate = routeName => dispatch => dispatch({type: types.NAVIGATE, routeName});