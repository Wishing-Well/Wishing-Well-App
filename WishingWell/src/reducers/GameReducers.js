/*jshint esversion: 6*/
import * as types from '../lib/constants';

const initialState = {
  droppedCoin: 200
};

const GameReducers = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case types.DROP_COIN:
      return Object.assign({}, state, {
        droppedCoin: state.droppedCoin - 5
      });
    case types.RESET_COIN:
      return Object.assign({}, state, {
        droppedCoin: initialState.droppedCoin
      });

    default:
      return state;
  }
};

export default GameReducers;