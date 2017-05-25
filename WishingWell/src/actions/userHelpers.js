/*jshint esversion: 6*/
import * as types from '../lib/constants';
import * as errors from '../lib/errors';

export const loginSuccess = (res) => {
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
};

export const displayError = (res) => {
  switch(res.error || 'NONE') {
    case error.USER_NOT_AUTHORIZED:
      return dispatch({type: types.PERMISSION_ERROR, message: 'You must be authorized'});
    case error.SERVER_UNKNOWN_ERROR:
      return dispatch({type: types.UNKNOWN_ERROR, message: 'Sorry, something may have gone wrong'});
    case error.TITLE_FORBIDDEN_WORD:
      return dispatch({type: types.WELL_TITLE_ERROR, message: 'Please keep your title clean'});
    case error.TITLE_INVALID_LENGTH:
      return dispatch({type: types.WELL_TITLE_ERROR, message: 'Title is of invalid length, please check'});
    case error.DESCRIPTION_FORBIDDEN_WORD:
      return dispatch({type: types.WELL_DESCRIPTION_ERROR, message: 'Please keep description clean'});
    case error.DESCRIPTION_INVALID_LENGTH:
      return dispatch({type: types.WELL_DESCRIPTION_ERROR, message: 'Sorry, description may not be more than 1000 characters'});
    case error.FUNDING_TARGET_INVALID_NUMBER:
      return dispatch({type: types.WELL_FUNDING_ERROR, message: 'Please check your funding target and try again'});
    case error.FUNDING_TARGET_INVALID_VALUE:
      return dispatch({type: types.WELL_FUNDING_ERROR, message: 'Sorry, max target is only 100 Dollars'});
    case error.REGISTRATION_USER_ALREADY_EXISTS:
      return dispatch({type: types.SIGNUP_EMAIL_ERROR, message: 'User already exists, please login'});
    case error.EMAIL_FORBIDDEN_WORD:
      return dispatch({type: types.SIGNUP_EMAIL_ERROR, message: 'Please keep email name clean'});
    case error.EMAIL_INVALID_STRING_FORMAT:
      return dispatch({type: types.SIGNUP_EMAIL_ERROR, message: 'Please check email input'});
    case error.EMAIL_INVALID_LENGTH:
      return dispatch({type: types.SIGNUP_EMAIL_ERROR, message: 'Please check email input'});
    case error.FULL_NAME_FORBIDDEN_WORD:
      return dispatch({type: types.SIGNUP_NAME_ERROR, message: 'Please keep full name input clean'});
    case error.FULL_NAME_INVALID_STRING_FORMAT:
      return dispatch({type: types.SIGNUP_NAME_ERROR, message: 'No special characters in full name'});
    case error.FULL_NAME_INVALID_LENGTH:
      return dispatch({type: types.SIGNUP_NAME_ERROR, message: 'Full name cannot be longer than 50 Characters'});
    case error.PASSWORD_INVALID_LENGTH:
      return dispatch({type: types.SIGNUP_PW_ERROR, message: 'Password length must be between 6 and 500 characters'});
  }
};