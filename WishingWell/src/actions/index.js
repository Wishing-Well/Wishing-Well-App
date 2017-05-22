/*jshint esversion: 6*/
import * as types from '../lib/constants';
import * as API from '../lib/API_CALLS.js';

export const login = (email, password) => dispatch => API.login(email, password)
  .then(user => {
    console.log(user);
    if(user.success === true) {
      dispatch({type: types.LOGIN_SUCCESS, user});
      dispatch({type: types.NAVIGATE, routeName: 'MapPage'});
    } else {
      dispatch({type: types.LOGIN_FAIL});
    }
  })
  .catch(err => dispatch({type: types.LOGIN_FAIL}));

export const signup = userInfo => {
  return dispatch => {
    return API.signup(userInfo)
    .then(user => {
      console.log(user);
      dispatch({type: types.SIGNUP_SUCCESS, user});
      //dispatch({type: types.NAVIGATE, routeName: 'MapPage'});
    })
    .catch(err => dispatch({type: types.SIGNUP_FAIL}));
  };
};

export const navigate = routeName => dispatch => dispatch({type: types.NAVIGATE, routeName});