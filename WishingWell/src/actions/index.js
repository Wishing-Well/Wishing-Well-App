/*jshint esversion: 6*/
import {AsyncStorage} from 'react-native';
import * as types from '../lib/constants';
import failure from './errorHelpers.js';
import * as API from '../lib/API_CALLS.js';
import stripe from 'tipsi-stripe';
import {STRIPE_KEY} from '../keys';
stripe.init({
  publishableKey: STRIPE_KEY
});

export const createWell = (wellInfo, done) => dispatch => {
  dispatch({type: types.SHOW_LOADING});
  stripe.createTokenWithBankAccount({
      accountNumber: wellInfo.accountNumber,
      routingNumber: wellInfo.routingNumber,
      countryCode: 'us',
      currency: 'usd'
    })
  .then(token => {
    navigator.geolocation.getCurrentPosition( position => {
      API.createWell({
        title: wellInfo.title,
        time: wellInfo.time,
        description: wellInfo.description,
        location: `${position.coords.latitude},${position.coords.longitude}`,
        funding_target: Number(wellInfo.funding_target) * 100,
        token: token
      })
      .then(res => {
        console.log(res)
        if (res.success) {
          dispatch({type: types.ADD_USER_WELL, userInfo: res.user});
          dispatch({type: types.ADD_WELL, well: prepareWells(res.user.Wells)});
          dispatch({type: types.CLOSE_LOADING});
          done(res.success);
        } else {
          failure(res, dispatch);
          done(res.success);
        }
        dispatch({type: types.CLOSE_LOADING});
      });
    });
  })
  .catch(error => {
    dispatch({type: types.CLOSE_LOADING});
    dispatch({type: types.BANK_FAIL, error});
    return false;
  });
};

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
      dispatch({type: types.CLOSE_LOADING});
      return true;
    } else {return failure(res, dispatch);}
  })
  .catch(error => {
    dispatch({type: types.CLOSE_LOADING});
    dispatch({type: types.LOGIN_FAIL, error});
    return false;
  });
};

export const signup = userInfo => dispatch => {
  dispatch({type: types.SHOW_LOADING});
  return API.signup(userInfo)
  .then(res => {
    if (res.success) {
      dispatch({type: types.SIGNUP_SUCCESS, id: res.user.id, full_name: res.user.full_name});
      dispatch({type: types.CLOSE_LOADING});
      dispatch(login(res.user.email, userInfo.password));
      return true;
    } else {return failure(res, dispatch);}
  })
  .catch(error => {
    dispatch({type: types.CLOSE_LOADING});
    dispatch({type: types.LOGIN_FAIL, error});
    return false;
  });
};

export const loginUser = asyncArr => dispatch => {
  dispatch({type: types.SHOW_LOADING});
  return API.reLogin()
  .then(res => {
    if(res.success) {
      dispatch({type: types.LOGIN_SUCCESS, userInfo: res.user});
      dispatch({type: types.CLOSE_LOADING});
      return true;
    } else {return failure(res, dispatch);}
  })
  .catch(error => {
    dispatch({type: types.CLOSE_LOADING});
    dispatch({type: types.LOG_OUT, error});
    return false;
  });
};

export const logout = () => dispatch => {
  dispatch({type: types.SHOW_LOADING});
  return API.logout()
  .then(res => {
    AsyncStorage.multiRemove(['email', 'user_id', 'loggedIn'])
      .then(() => dispatch({type: types.LOG_OUT}))
      .catch(error => dispatch({type: types.LOG_OUT, error}));
    dispatch({type: types.CLOSE_LOADING});
  });
};

export const loadApp = () => dispatch => {
  dispatch({type: types.SHOW_LOADING});
  return API.getAllWells()
  .then((res) => {
    if (res.success) {
      dispatch({type: types.ALL_WELLS, allWells: prepareWells(res.wells)});
    } else {failure(res, dispatch);}
    return API.getAllUsers()
    .then(res => {
      if (res.success) {
        dispatch({type: types.ALL_USERS, allUsers: res.users});
        dispatch({type: types.CLOSE_LOADING});
        return true;
      } else {return failure(res, dispatch);}
    });
  })
  .catch(error => {
    dispatch({type: types.CLOSE_LOADING});
    dispatch({type: types.LOAD_APP_DATA_FAIL, error});
    return false;
  });
};

export const donate = info => dispatch => {
  dispatch({type: types.SHOW_LOADING});
  return stripe.createTokenWithCard(info.params)
  .then(token => {
    return API.donate(info.well_id, Number(info.amount) * 100, token, info.message)
    .then(res => {
      console.log(res);
      if (res.success) {
        dispatch(loadApp());
        dispatch({type: types.CLOSE_LOADING});
        return true;
      } else {return failure(res, dispatch);}
    });
  })
  .catch(error => {
    dispatch({type: types.CLOSE_LOADING});
    dispatch({type: types.DONATION_FAIL, error});
    return false;
  });
};

export const clearErrors = () => dispatch => dispatch({type: types.CLEAR_ERRORS});

const prepareWells = wellsArray => {
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