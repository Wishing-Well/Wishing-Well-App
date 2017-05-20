/*jshint esversion: 6*/
import * as types from '../constants';

export const login = (username, password) => {
  return dispatch => {
    return db.login(username, password)
      .then(user => {
        dispatch({type: types.LOGIN_SUCCESS, user});
      })
      .catch(err => dispatch({type: LOGIN_FAIL}));
  };
};