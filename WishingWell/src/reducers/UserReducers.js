/*jshint esversion: 6*/
import * as types from '../lib/constants';

const initialState = {
  loggedIn: false,
  userInfo: null,
};

const UserReducers = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        loggedIn: true,
        userInfo: action.userInfo
      });

    case types.SIGNUP_SUCCESS:
      return Object.assign({}, state, {
        loggedIn: true,
        userInfo: action.userInfo
      });

    case types.LOGIN_USER:
      return Object.assign({}, state, {
        loggedIn: true,
        userInfo: action.userInfo
      });

    case types.LOG_OUT:
      return Object.assign({}, state, {
        loggedIn: false,
        userInfo: null
      });

    default:
      return state;
  }
};

export default UserReducers;