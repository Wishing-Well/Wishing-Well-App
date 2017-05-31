/*jshint esversion: 6*/
import * as types from '../lib/constants';

export const dropCoin = () => dispatch => dispatch({type: types.DROP_COIN});

export const resetCoin = () => dispatch => dispatch({type: types.RESET_COIN});