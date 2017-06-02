/*jshint esversion: 6*/
import {AsyncStorage} from 'react-native';
import * as types from '../lib/constants';
import failure from './errorHelpers.js';
import * as API from '../lib/API_CALLS.js';

export const login = (email, password) => dispatch => {
  dispatch({type: types.SHOW_LOADING});
  return API.login(email, password)
  .then(res => {
    if(res.success) {
      AsyncStorage.multiRemove(['email', 'user_id', 'loggedIn'], (err) => {
        if (err) failure(err, dispatch);
        AsyncStorage.multiSet([['email', res.user.email], ['user_id', `${res.user.user_id}`], ['loggedIn', 'true']], () => {
          dispatch({type: types.LOGIN_SUCCESS, userInfo: res.user});
        });
      });
      return dispatch({type: types.CLOSE_LOADING, success: true});
    } else {return failure(res, dispatch);}
  })
  .catch(error => dispatch({type: types.LOGIN_FAIL, error}));
}

export const signup = userInfo => dispatch => {
  dispatch({type: types.SHOW_LOADING});
  return API.signup(userInfo)
  .then(res => {
    console.log(res);
    if (res.success) {
      dispatch({type: types.SIGNUP_SUCCESS, id: res.user.id, full_name: res.user.full_name});
      dispatch(login(res.user.email, userInfo.password))
      return dispatch({type: types.CLOSE_LOADING, success: true});
    } else {return failure(res, dispatch);}
  })
  .catch(error => dispatch({type: types.LOGIN_FAIL, error}));
}

export const loginUser = asyncArr => dispatch => {
  dispatch({type: types.SHOW_LOADING});
  return API.reLogin()
  .then(res => {
    console.log(res);
    if(res.success) {
      dispatch({type: types.LOGIN_SUCCESS, userInfo: res.user});
      return dispatch({type: types.CLOSE_LOADING, success: true});
    } else {return failure(res, dispatch);}
  })
  .catch(error => dispatch({type: types.LOG_OUT, error}));
}

export const logout = () => dispatch => {
  dispatch({type: types.SHOW_LOADING});
  return API.logout()
  .then(res => {
    console.log(res);
    AsyncStorage.multiRemove(['email', 'user_id', 'loggedIn'])
      .then(() => dispatch({type: types.LOG_OUT}))
      .catch(error => dispatch({type: types.LOG_OUT, error}));
    return dispatch({type: types.CLOSE_LOADING, success: true});
  });
}

export const createWell = wellInfo => dispatch => {
  dispatch({type: types.SHOW_LOADING});
  return API.createWell(wellInfo)
  .then(res => {
    console.log(res);
    if (res.success) {
      dispatch({type: types.ADD_USER_WELL, userInfo: res.user});
      dispatch({type: types.ADD_WELL, well: prepareWells(res.user.Wells)});
      return dispatch({type: types.CLOSE_LOADING, success: true});
    } else {return failure(res, dispatch);}
  })
  .catch(error => dispatch({type: types.CREATE_WELL_FAIL, error}));
}

export const loadApp = () => dispatch => {
  dispatch({type: types.SHOW_LOADING});
  return API.getAllWells()
  .then((res) => {
    console.log(res);
    if (res.success) {
      dispatch({type: types.ALL_WELLS, allWells: prepareWells(res.wells)});
    } else {failure(res, dispatch);}
    return API.getAllUsers()
    .then(res => {
      console.log(res)
      if (res.success) {
        dispatch({type: types.ALL_USERS, allUsers: res.users});
        return dispatch({type: types.CLOSE_LOADING, success: true});
      } else {return failure(res, dispatch);}
    })
  })
  .catch(error => dispatch({type: types.LOAD_APP_DATA_FAIL, error}));
}

export const donate = (well_id, amount, token, message) => dispatch => {
  dispatch({type: types.SHOW_LOADING});
  return API.donate(well_id, amount, token, message)
  .then(res => {
    console.log(res);
    if (res.success) {
      dispatch({type: types.MAKE_DONATION, userInfo: res.user});
      return dispatch({type: types.CLOSE_LOADING, success: true});
    } else {return failure(res, dispatch);}
  })
  .catch(error => dispatch({type: types.DONATION_FAIL, error}));
}

export const makeCharge = (amount, token) => dispatch => {
  dispatch({type: types.SHOW_LOADING});
  return API.makeCharge(amount, token)
  .then(res => {
    console.log(res);
    if (res.success) {
      dispatch({type: types.PAYMENT_SUCCESS, userInfo: res.user});
      return dispatch({type: types.CLOSE_LOADING, success: true});
    } else {return failure(res, dispatch);}
  });
}

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
        createdAt: well.createdAt,
        Donations: well.Donations,
        Messages: well.Messages
      }
    )
  );
};