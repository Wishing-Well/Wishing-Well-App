/*jshint esversion: 6*/
import * as types from '../lib/constants';

const initialState = {
  loggedIn: false,
  userInfo: null,
  loginErr: false,
  signupErr: false
};

const UserReducers = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        loggedIn: true,
        userInfo: action.userInfo
      });

    case types.LOGIN_FAIL:
      return Object.assign({}, state, {
        loggedIn: false,
        userInfo: null,
        login_err: true
      });

    case types.SIGNUP_SUCCESS:
      return Object.assign({}, state, {
        loggedIn: true,
        userInfo: action.userInfo
      });

    case types.SIGNUP_FAIL:
      return Object.assign({}, state, {
        loggedIn: false,
        userInfo: null,
        signupErr: true
      });

    case types.CLOSE_ERR:
      return Object.assign({}, state, {
        loginErr: false,
        signupErr: false
      });


    default:
      return state;
  }
};

export default UserReducers;