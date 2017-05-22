/*jshint esversion: 6*/
import * as types from '../constants';

const initialState = {
  loggedIn: false,
  userInfo: null,
  login_err: false,
  signup_err: false
};

const UserReducers = (state = initialState, action) => {
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
        signup_err: true
      });

    case types.CLOSE_ERR:
      return Object.assign({}, state, {
        login_err: false,
        signup_err: false
      });


    default:
      return state;
  }
};

export default UserReducers;