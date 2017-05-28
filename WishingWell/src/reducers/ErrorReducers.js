/*jshint esversion: 6*/
import * as types from '../lib/constants';

const initialState = {
  globalErr: false,
  wellTitleErr: false,
  wellDescErr: false,
  signEmailErr: false,
  signNameErr: false,
  signPwErr: false,
  loginErr: false,
  donationErr: false,
  errMessage: ''
};

const ErrorReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GLOBAL_ERROR:
      return Object.assign({}, state, {
        globalErr: true,
        errMessage: action.message
      });

    case types.WELL_TITLE_ERROR:
      return Object.assign({}, state, {
        wellTitleErr: true,
        errMessage: action.message
      });

    case types.WELL_DESCRIPTION_ERROR:
      return Object.assign({}, state, {
        wellDescErr: true,
        errMessage: action.message
      });

    case types.SIGNUP_EMAIL_ERROR:
      return Object.assign({}, state, {
        signEmailErr: true,
        errMessage: action.message
      });

    case types.SIGNUP_NAME_ERROR:
      return Object.assign({}, state, {
        signNameErr: true,
        errMessage: action.message
      });

    case types.SIGNUP_PW_ERROR:
      return Object.assign({}, state, {
        signPwErr: true,
        errMessage: action.message
      });

    case types.LOGIN_FAIL:
      return Object.assign({}, state, {
        loginErr: true,
        errMessage: action.message
      });

    case types.DONATION_FAIL:
      return Object.assign({}, state, {
        donationErr: true,
        errMessage: action.message
      });

    default:
      return state;
  }
};

export default ErrorReducers;