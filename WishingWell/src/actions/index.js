/*jshint esversion: 6*/
import {AsyncStorage} from 'react-native';
import * as types from '../lib/constants';
import failure from './errorHelpers.js';
import * as API from '../lib/API_CALLS.js';

export const login = (email, password) => dispatch => API.login(email, password)
  .then(res => {
    if(res.success === true) {
      AsyncStorage.multiRemove(['email', 'user_id', 'loggedIn'])
      .then(() => {
        AsyncStorage.multiSet([
          ['email', res.user.email],
          ['user_id', `${res.user.id}`],
          ['loggedIn', 'true']],
          (err) => dispatch({type: types.ASYNC_SET_ERROR}))
        .then(() => {
          dispatch({type: types.LOGIN_SUCCESS, userInfo: res});
        });
      });
    } else {
      failure(res);
    }
  })
  .catch(error => dispatch({type: types.LOGIN_FAIL, error}));

export const signup = userInfo => dispatch => API.signup(userInfo)
  .then(res => {
    if(res.success === true) {
      AsyncStorage.multiRemove(['email', 'user_id', 'loggedIn'])
      .then(() => {
        AsyncStorage.multiSet([
          ['email', res.user.email],
          ['user_id', `${res.user.id}`],
          ['loggedIn', 'true']])
        .then(response => {
          API.login(res.user.email, userInfo.password)
            .then(res => {
              dispatch({type: types.SIGNUP_SUCCESS, userInfo: res});
            });
        });
      });
    } else {
      failure(res);
    }
  })
  .catch(error => failure());

export const loginUser = asyncArr => dispatch =>
  dispatch({type: types.LOGIN_USER, userInfo: {
    email: asyncArr[0][1],
    id: asyncArr[1][1]
  }});

export const logout = () => dispatch => API.logout()
  .then(res => {
    if( res.success === true) {
      AsyncStorage.multiRemove(['email', 'user_id', 'loggedIn'])
        .then(() => dispatch({type: types.LOG_OUT}))
        .catch(error => dispatch({type: types.LOG_OUT, error}));
    }
  });

export const createWell = wellInfo => dispatch => API.createWell(wellInfo)
  .then(res => {
    if (res.success === true) {
      dispatch({type: types.ADD_WELL, well: res.well});
    } else {
      failure(res);
    }
  })
  .catch(error => dispatch({type: types.CREATE_WELL_FAIL, error}));

export const loadApp = () => dispatch =>
API.getAllWells()
  .then((res) => {
    if (res.success === true) {
      dispatch({type: types.ALL_WELLS, wells: res.wells});
    } else {failure(res);}
    API.getUserWells(id)
      .then((res) => {
        if (res.success === true) {
          dispatch({type: types.USER_WELL, well: res.well});
        } else {failure(res);}
        API.getUserDonations(id)
          .then(res => {
            if (res.success === true) {
              dispatch({type: types.USER_DONATIONS, donations: res.donations});
            } else {failure(res);}
          });
      });
  })
  .catch(error => dispatch({type: types.LOAD_APP_DATA_FAIL, error}));

export const makeDonation = (well_id, user_id, amount) => dispatch => API.makeDonation(well_id, user_id, amount)
  .then(res => {
    if (res.success === true) {
      dispatch({type: types.MAKE_DONATION, donation: res.donation});
    } else {failure(res);}
  })
  .catch(error => dispatch({type: types.DONATION_FAIL, error}));