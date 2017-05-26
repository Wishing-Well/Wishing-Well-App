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
      if (res.success) {
        API.login(userInfo.email, userInfo.password)
        .then(res => {
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
  dispatch({type: types.LOGIN_USER, userInfo: {
    email: asyncArr[0][1],
    id: asyncArr[1][1]
  }});

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
      dispatch({type: types.ADD_WELL, well: res.well});
    } else {failure(res, dispatch);}
  })
  .catch(error => dispatch({type: types.CREATE_WELL_FAIL, error}));

export const loadApp = (id) => dispatch =>
API.getAllWells()
  .then((res) => {
    console.log(res);
    if (res.success === true) {
      dispatch({type: types.ALL_WELLS, wells: prepareAllWells(res.wells)});
    } else {failure(res, dispatch);}
    if (id !== undefined) {
      API.getUserWell(id)
        .then((res) => {
          console.log(res);
          if (res.success === true) {
            dispatch({type: types.USER_WELL, well: res.well});
          } else {failure(res, dispatch);}
          /*API.getUserDonations(id)
            .then(res => {
              console.log(res);
              if (res.success === true) {
                dispatch({type: types.USER_DONATIONS, donations: res.donations});
              } else {failure(res, dispatch);}
            });*/
        });
    }
  })
  .catch(error => dispatch({type: types.LOAD_APP_DATA_FAIL, error}));

export const makeDonation = (well_id, user_id, amount) => dispatch => API.makeDonation(well_id, user_id, amount)
  .then(res => {
    console.log(res);
    if (res.success === true) {
      dispatch({type: types.MAKE_DONATION, donation: res.donation});
    } else {failure(res, dispatch);}
  })
  .catch(error => dispatch({type: types.DONATION_FAIL, error}));

const prepareAllWells = wellsArray => {
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
        key: well.id
      }
    )
  );
};