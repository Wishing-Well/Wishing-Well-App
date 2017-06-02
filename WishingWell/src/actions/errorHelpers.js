/*jshint esversion: 6*/
import * as error from '../lib/errors';
import * as types from '../lib/constants';

export default (res, dispatch) => {
  console.log(res.error);
  switch(res.error) {
    case error.USER_NOT_AUTHORIZED:
      dispatch(
        {
          type: types.GLOBAL_ERROR,
          message: 'You must be authorized'
        }
      );
      return dispatch({type: types.CLOSE_LOADING, success: false});
    case error.SERVER_UNKNOWN_ERROR:
      dispatch(
        {
          type: types.GLOBAL_ERROR,
          message: 'Sorry, something may have gone wrong'
        }
      );
      return dispatch({type: types.CLOSE_LOADING, success: false});
    case error.UNKNOWN_ERROR:
      dispatch(
        {
          type: types.GLOBAL_ERROR,
          message: 'Sorry, something may have gone wrong'
        }
      );
      return dispatch({type: types.CLOSE_LOADING, success: false});
    case error.TITLE_FORBIDDEN_WORD:
      dispatch(
        {
          type: types.WELL_TITLE_ERROR,
          message: 'Please keep your title clean'
        }
      );
      return dispatch({type: types.CLOSE_LOADING, success: false});
    case error.TITLE_INVALID_LENGTH:
      dispatch(
        {
          type: types.WELL_TITLE_ERROR,
          message: 'Title is of invalid length, please check'
        }
      );
      return dispatch({type: types.CLOSE_LOADING, success: false});
    case error.DESCRIPTION_FORBIDDEN_WORD:
      dispatch(
        {
          type: types.WELL_DESCRIPTION_ERROR,
          message: 'Please keep description clean'
        }
      );
      return dispatch({type: types.CLOSE_LOADING, success: false});
    case error.DESCRIPTION_INVALID_LENGTH:
      dispatch(
        {
          type: types.WELL_DESCRIPTION_ERROR,
          message: 'Sorry, description may not be more than 1000 characters'
        }
      );
      return dispatch({type: types.CLOSE_LOADING, success: false});
    case error.REGISTRATION_USER_ALREADY_EXISTS:
      dispatch(
        {
          type: types.SIGNUP_EMAIL_ERROR,
          message: 'User already exists, please login'
        }
      );
      return dispatch({type: types.CLOSE_LOADING, success: false});
    case error.EMAIL_FORBIDDEN_WORD:
      dispatch(
        {
          type: types.SIGNUP_EMAIL_ERROR,
          message: 'Please keep email name clean'
        }
      );
      return dispatch({type: types.CLOSE_LOADING, success: false});
    case error.EMAIL_INVALID_STRING_FORMAT:
      dispatch(
        {
          type: types.SIGNUP_EMAIL_ERROR,
          message: 'Please check email input'
        }
      );
      return dispatch({type: types.CLOSE_LOADING, success: false});
    case error.EMAIL_INVALID_LENGTH:
      dispatch(
        {
          type: types.SIGNUP_EMAIL_ERROR,
          message: 'Please check email input'
        }
      );
      return dispatch({type: types.CLOSE_LOADING, success: false});
    case error.FULL_NAME_FORBIDDEN_WORD:
      dispatch(
        {
          type: types.SIGNUP_NAME_ERROR,
          message: 'Please keep full name input clean'
        }
      );
      return dispatch({type: types.CLOSE_LOADING, success: false});
    case error.FULL_NAME_INVALID_STRING_FORMAT:
      dispatch(
        {
          type: types.SIGNUP_NAME_ERROR,
          message: 'No special characters in full name'
        }
      );
      return dispatch({type: types.CLOSE_LOADING, success: false});
    case error.FULL_NAME_INVALID_LENGTH:
      dispatch(
        {
          type: types.SIGNUP_NAME_ERROR,
          message: 'Full name cannot be longer than 50 Characters'
        }
      );
      return dispatch({type: types.CLOSE_LOADING, success: false});
    case error.PASSWORD_INVALID_LENGTH:
      dispatch(
        {
          type: types.SIGNUP_PW_ERROR,
          message: 'Password length must be between 6 and 500 characters'
        }
      );
      return dispatch({type: types.CLOSE_LOADING, success: false});
    case error.LOGIN_INVALID:
      dispatch(
        {
          type: types.LOGIN_FAIL,
          message: 'Sorry, that is an invalid username or password'
        }
      );
      return dispatch({type: types.CLOSE_LOADING, success: false});
    case error.USER_DONATED_NEGATIVE_OR_ZERO_MONEY:
      dispatch(
        {
          type: types.DONATION_FAIL,
          message: 'Sorry, you must donate at least $1 USD'
        }
      );
      return dispatch({type: types.CLOSE_LOADING, success: false});
    case error.WELL_DOES_NOT_EXIST:
      dispatch(
        {
          type: types.DONATION_FAIL,
          message: 'Sorry, the well you are donating to does not exist'
        }
      );
      return dispatch({type: types.CLOSE_LOADING, success: false});
    case error.USER_NOT_ENOUGH_MONEY:
      dispatch(
        {
          type: types.DONATION_FAIL,
          message: 'Sorry, you have insufficient funds'
        }
      );
      return dispatch({type: types.CLOSE_LOADING, success: false});
    default:
      dispatch(
        {
          type: types.GLOBAL_ERROR,
          message: 'Sorry, something may have gone wrong'
        }
      );
      return dispatch({type: types.CLOSE_LOADING, success: false});
  }
};