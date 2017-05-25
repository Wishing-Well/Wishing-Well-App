/*jshint esversion: 6*/
import * as types from '../lib/constants';

const initialState = {
  globalErr: null,
  wellTitleErr: null,
  wellDescErr: null,
  wellFundErr: null,
  signEmailErr: null,
  signNameErr: null,
  signPwErr: null,
  loginErr: null
};

const ErrorReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GLOBAL_ERROR:
      return Object.assign({}, state, {
        globalErr: action.message
      });

    case types.WELL_TITLE_ERROR:
      return Object.assign({}, state, {
        wellTitleErr: action.message
      });

    case types.WELL_DESCRIPTION_ERROR:
      return Object.assign({}, state, {
        wellDescErr: action.message
      });

    case types.WELL_FUNDING_ERROR:
      return Object.assign({}, state, {
        wellFundErr: action.message
      });

    case types.SIGNUP_EMAIL_ERROR:
      return Object.assign({}, state, {
        signEmailErr: action.message
      });

    case types.SIGNUP_NAME_ERROR:
      return Object.assign({}, state, {
        signNameErr: action.message
      });

    case types.SIGNUP_PW_ERROR:
      return Object.assign({}, state, {
        signPwErr: action.message
      });

    case types.LOGIN_ERROR:
      return Object.assign({}, state, {
        loginErr: action.message
      });

    default:
      return state;
  }
};

export default ErrorReducers;