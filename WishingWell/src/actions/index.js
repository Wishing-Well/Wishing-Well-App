/*jshint esversion: 6*/
import {AsyncStorage} from 'react-native';
import * as types from '../lib/constants';
import * as API from '../lib/API_CALLS.js';

export const login = (email, password) => dispatch => API.login(email, password)
  .then(res => {
    if(res.success === true) {
      AsyncStorage.multiRemove(['email', 'user_id', 'loggedIn'])
      .then(() => {
        AsyncStorage.multiSet([['email', res.user.email], ['user_id', `${res.user.id}`], ['loggedIn', 'true']], (err) => {
          console.log(err);
        })
        .then(() => {
          dispatch({type: types.LOGIN_SUCCESS, userInfo: res});
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
      AsyncStorage.multiRemove(['email', 'user_id', 'loggedIn'])
      .then(() => {
        AsyncStorage.multiSet([['email', res.user.email], ['user_id', `${res.user.id}`], ['loggedIn', 'true']], (err) => {
          console.log(err);
        })
        .then(() => {
          dispatch({type: types.SIGNUP_SUCCESS, userInfo: res});
        });
      });
    } else {
      dispatch({type: types.SIGNUP_FAIL});
    }
  })
  .catch(error => dispatch({type: types.SIGNUP_FAIL, error}));

export const loginUser = asyncArr => dispatch =>
  dispatch({type: types.LOGIN_USER, userInfo: {
    email: asyncArr[0][1],
    id: asyncArr[1][1]
  }});

export const logout = () => dispatch => {

  AsyncStorage.multiRemove(['email', 'user_id', 'loggedIn'])
    .then(() => dispatch({type: types.LOG_OUT}));

};

export const createWell = wellInfo => dispatch => API.createWell(wellInfo)
  .then(res => {
    console.log(res);
  })
  .catch(error => {
    console.log(error);
  });

export const loadApp = () => dispatch =>
API.getAllWells()
  .then((res) => {
    if (res.success === true) {
      dispatch({type: ALL_WELLS, wells: res.wells});
    }
    API.getUserWells(id)
      .then((res) => {
        if (res.success === true) {
          dispatch({type: types.USER_WELL, user_well: res.well});
        }
        API.getUserDonations(id)
          .then(res => {
            if (res.success === true) {
              dispatch({type: types.USER_DONATIONS, user_donations: res.donations});
            }
          });
      });
  });