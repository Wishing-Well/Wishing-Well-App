/*jshint esversion: 6*/
import * as error from '../lib/errors';
import * as types from '../lib/constants';

export default (res, dispatch) => {
  console.log(res.error);
  switch(res.error) {
    case error.USER_NOT_AUTHORIZED:
      return dispatch(
        {
          type: types.GLOBAL_ERROR,
          message: 'You must be authorized'
        }
      );
    case error.SERVER_UNKNOWN_ERROR:
      return dispatch(
        {
          type: types.GLOBAL_ERROR,
          message: 'Sorry, something may have gone wrong'
        }
      );
    case error.UNKNOWN_ERROR:
      return dispatch(
        {
          type: types.GLOBAL_ERROR,
          message: 'Sorry, something may have gone wrong'
        }
      );
    case error.TITLE_FORBIDDEN_WORD:
      return dispatch(
        {
          type: types.WELL_TITLE_ERROR,
          message: 'Please keep your title clean'
        }
      );
    case error.TITLE_INVALID_LENGTH:
      return dispatch(
        {
          type: types.WELL_TITLE_ERROR,
          message: 'Title is of invalid length, please check'
        }
      );
    case error.DESCRIPTION_FORBIDDEN_WORD:
      return dispatch(
        {
          type: types.WELL_DESCRIPTION_ERROR,
          message: 'Please keep description clean'
        }
      );
    case error.DESCRIPTION_INVALID_LENGTH:
      return dispatch(
        {
          type: types.WELL_DESCRIPTION_ERROR,
          message: 'Sorry, description may not be more than 1000 characters'
        }
      );
    case error.REGISTRATION_USER_ALREADY_EXISTS:
      return dispatch(
        {
          type: types.SIGNUP_EMAIL_ERROR,
          message: 'User already exists, please login'
        }
      );
    case error.EMAIL_FORBIDDEN_WORD:
      return dispatch(
        {
          type: types.SIGNUP_EMAIL_ERROR,
          message: 'Please keep email name clean'
        }
      );
    case error.EMAIL_INVALID_STRING_FORMAT:
      return dispatch(
        {
          type: types.SIGNUP_EMAIL_ERROR,
          message: 'Please check email input'
        }
      );
    case error.EMAIL_INVALID_LENGTH:
      return dispatch(
        {
          type: types.SIGNUP_EMAIL_ERROR,
          message: 'Please check email input'
        }
      );
    case error.FULL_NAME_FORBIDDEN_WORD:
      return dispatch(
        {
          type: types.SIGNUP_NAME_ERROR,
          message: 'Please keep full name input clean'
        }
      );
    case error.FULL_NAME_INVALID_STRING_FORMAT:
      return dispatch(
        {
          type: types.SIGNUP_NAME_ERROR,
          message: 'No special characters in full name'
        }
      );
    case error.FULL_NAME_INVALID_LENGTH:
      return dispatch(
        {
          type: types.SIGNUP_NAME_ERROR,
          message: 'Full name cannot be longer than 50 Characters'
        }
      );
    case error.PASSWORD_INVALID_LENGTH:
      return dispatch(
        {
          type: types.SIGNUP_PW_ERROR,
          message: 'Password length must be between 6 and 500 characters'
        }
      );
    default:
      return dispatch(
        {
          type: types.GLOBAL_ERROR,
          message: 'Sorry, something may have gone wrong'
        }
      );
  }
};