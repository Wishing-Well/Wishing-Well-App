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
      dispatch({type: types.CLOSE_LOADING});
      return false;
    case error.SERVER_UNKNOWN_ERROR:
      dispatch(
        {
          type: types.GLOBAL_ERROR,
          message: 'Sorry, something may have gone wrong'
        }
      );
      dispatch({type: types.CLOSE_LOADING});
      return false;
    case error.UNKNOWN_ERROR:
      dispatch(
        {
          type: types.GLOBAL_ERROR,
          message: 'Sorry, something may have gone wrong'
        }
      );
      dispatch({type: types.CLOSE_LOADING});
      return false;
    case error.TITLE_FORBIDDEN_WORD:
      dispatch(
        {
          type: types.WELL_TITLE_ERROR,
          message: 'Please keep your title clean'
        }
      );
      dispatch({type: types.CLOSE_LOADING});
      return false;
    case error.TITLE_INVALID_LENGTH:
      dispatch(
        {
          type: types.WELL_TITLE_ERROR,
          message: 'Title is of invalid length, please check'
        }
      );
      dispatch({type: types.CLOSE_LOADING});
      return false;
    case error.DESCRIPTION_FORBIDDEN_WORD:
      dispatch(
        {
          type: types.WELL_DESCRIPTION_ERROR,
          message: 'Please keep description clean'
        }
      );
      dispatch({type: types.CLOSE_LOADING});
      return false;
    case error.DESCRIPTION_INVALID_LENGTH:
      dispatch(
        {
          type: types.WELL_DESCRIPTION_ERROR,
          message: 'Sorry, description may not be more than 1000 characters'
        }
      );
      dispatch({type: types.CLOSE_LOADING});
      return false;
    case error.REGISTRATION_USER_ALREADY_EXISTS:
      dispatch(
        {
          type: types.SIGNUP_EMAIL_ERROR,
          message: 'User already exists, please login'
        }
      );
      dispatch({type: types.CLOSE_LOADING});
      return false;
    case error.EMAIL_FORBIDDEN_WORD:
      dispatch(
        {
          type: types.SIGNUP_EMAIL_ERROR,
          message: 'Please keep email name clean'
        }
      );
      dispatch({type: types.CLOSE_LOADING});
      return false;
    case error.EMAIL_INVALID_STRING_FORMAT:
      dispatch(
        {
          type: types.SIGNUP_EMAIL_ERROR,
          message: 'Please check email input'
        }
      );
      dispatch({type: types.CLOSE_LOADING});
      return false;
    case error.EMAIL_INVALID_LENGTH:
      dispatch(
        {
          type: types.SIGNUP_EMAIL_ERROR,
          message: 'Please check email input'
        }
      );
      dispatch({type: types.CLOSE_LOADING});
      return false;
    case error.FULL_NAME_FORBIDDEN_WORD:
      dispatch(
        {
          type: types.SIGNUP_NAME_ERROR,
          message: 'Please keep full name input clean'
        }
      );
      dispatch({type: types.CLOSE_LOADING});
      return false;
    case error.FULL_NAME_INVALID_STRING_FORMAT:
      dispatch(
        {
          type: types.SIGNUP_NAME_ERROR,
          message: 'No special characters in full name'
        }
      );
      dispatch({type: types.CLOSE_LOADING});
      return false;
    case error.FULL_NAME_INVALID_LENGTH:
      dispatch(
        {
          type: types.SIGNUP_NAME_ERROR,
          message: 'Full name cannot be longer than 50 Characters'
        }
      );
      dispatch({type: types.CLOSE_LOADING});
      return false;
    case error.PASSWORD_INVALID_LENGTH:
      dispatch(
        {
          type: types.SIGNUP_PW_ERROR,
          message: 'Password length must be between 6 and 500 characters'
        }
      );
      dispatch({type: types.CLOSE_LOADING});
      return false;
    case error.LOGIN_INVALID:
      dispatch(
        {
          type: types.LOGIN_FAIL,
          message: 'Sorry, that is an invalid username or password'
        }
      );
      dispatch({type: types.CLOSE_LOADING});
      return false;
    case error.USER_DONATED_NEGATIVE_OR_ZERO_MONEY:
      dispatch(
        {
          type: types.DONATION_FAIL,
          message: 'Sorry, you must donate at least $1 USD'
        }
      );
      dispatch({type: types.CLOSE_LOADING});
      return false;
    case error.WELL_DOES_NOT_EXIST:
      dispatch(
        {
          type: types.DONATION_FAIL,
          message: 'Sorry, the well you are donating to does not exist'
        }
      );
      dispatch({type: types.CLOSE_LOADING});
      return false;
    case error.USER_NOT_ENOUGH_MONEY:
      dispatch(
        {
          type: types.DONATION_FAIL,
          message: 'Sorry, you have insufficient funds'
        }
      );
      dispatch({type: types.CLOSE_LOADING});
      return false;
    default:
      dispatch(
        {
          type: types.GLOBAL_ERROR,
          message: 'Sorry, something may have gone wrong'
        }
      );
      dispatch({type: types.CLOSE_LOADING});
      return false;
  }
};