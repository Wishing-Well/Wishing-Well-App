/*jshint esversion: 6*/
import {AsyncStorage} from 'react-native';
import * as types from '../lib/constants';
import failure from './errorHelpers.js';
import * as API from '../lib/API_CALLS.js';

export const login = (email, password) => dispatch =>
  API.login(email, password)
  .then(res => {
    if(res.success) {
      AsyncStorage.multiRemove(['email', 'user_id', 'loggedIn'], (err) => {
        if (err) failure(err, dispatch);
        AsyncStorage.multiSet([['email', res.user.email], ['user_id', `${res.user.user_id}`], ['loggedIn', 'true']], () => {
          dispatch({type: types.LOGIN_SUCCESS, userInfo: res.user});
        });
      });
    } else {failure(res, dispatch);}
  })
  .catch(error => dispatch({type: types.LOGIN_FAIL, error}));

  export const signup = userInfo => dispatch =>
    API.signup(userInfo)
    .then(res => {
      console.log(res);
      if (res.success) {
        API.login(userInfo.email, userInfo.password)
        .then(res => {
          console.log(res);
          if(res.success) {
            AsyncStorage.multiRemove(['email', 'user_id', 'loggedIn'], (err) => {
              if (err) failure(err, dispatch);

              AsyncStorage.multiSet([['email', res.user.email], ['user_id', `${res.user.user_id}`], ['loggedIn', 'true']], () => {
                dispatch({type: types.LOGIN_SUCCESS, userInfo: res.user});
              });
            });
          } else {failure(res, dispatch);}
        });
      } else {failure(res, dispatch);}
    })
    .catch(error => dispatch({type: types.LOGIN_FAIL, error}));



export const loginUser = asyncArr => dispatch =>
API.reLogin()
.then(res => {
  console.log(res);
  if(res.success) {
    dispatch({type: types.LOGIN_SUCCESS, userInfo: res.user});
  }
})
.catch(error => dispatch({type: types.LOG_OUT, error}));

export const logout = () => dispatch => API.logout()
  .then(res => {
    console.log(res);
      AsyncStorage.multiRemove(['email', 'user_id', 'loggedIn'])
        .then(() => dispatch({type: types.LOG_OUT}))
        .catch(error => dispatch({type: types.LOG_OUT, error}));
  });

export const createWell = wellInfo => dispatch => API.createWell(wellInfo)
  .then(res => {
    console.log(res);
    if (res.success === true) {
      dispatch({type: types.ADD_USER_WELL, userInfo: res.user});
      dispatch({type: types.ADD_WELL, well: prepareWells(res.user.Wells)});
    } else {failure(res, dispatch);}
  })
  .catch(error => dispatch({type: types.CREATE_WELL_FAIL, error}));

export const loadApp = () => dispatch =>
API.getAllWells()
  .then((res) => {
    console.log(res);
    if (res.success === true) {
      dispatch({type: types.ALL_WELLS, wells: prepareWells(res.wells)});
    } else {failure(res, dispatch);}
  })
  .catch(error => dispatch({type: types.LOAD_APP_DATA_FAIL, error}));

export const donate = (well_id, amount, token, message) => dispatch => API.donate(well_id, amount, token, message)
  .then(res => {
    console.log(res);
    if (res.success === true) {
      dispatch({type: types.MAKE_DONATION, userInfo: res.user});
    } else {failure(res, dispatch);}
  })
  .catch(error => dispatch({type: types.DONATION_FAIL, error}));

export const makeCharge = (amount, token) => dispatch => API.makeCharge(amount, token)
  .then(res => {
    console.log(res);
    if (res.success) {
      dispatch({type: types.PAYMENT_SUCCESS, userInfo: res.user});
    } else {failure(res, dispatch);}
  });

const prepareWells = wellsArray => {
  console.log(wellsArray);
  return wellsArray.map(
    well => (
      {
        coordinates: [Number(well.location.split(',')[0]), Number(well.location.split(',')[1])],
        type: 'point',
        title: well.title,
        id: `${well.id}`,
        annotationImage: {
          source: { uri: 'well' },
          height: 50,
          width: 50
        },
        key: well.id,
        description: well.description,
        funding_target: well.funding_target,
        current_amount: well.current_amount,
        expiration_date: well.expiration_date,
        createdAt: well.createdAt
      }
    )
  );
};