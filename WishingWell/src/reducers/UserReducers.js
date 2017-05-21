/*jshint esversion: 6*/
import * as types from '../constants';

const initialState = {
  loggedIn: false,
  userInfo: null
};

const UserReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:


    default:
      return state;
  }
};

export default UserReducers;