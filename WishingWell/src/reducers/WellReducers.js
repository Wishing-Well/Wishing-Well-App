/*jshint esversion: 6*/
import * as types from '../lib/constants';

const initialState = {
  allWells: []
};

const WellReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.ALL_WELLS:
      return Object.assign({}, state, {
        allWells: action.allWells
      });

    case types.ADD_WELL:
      return Object.assign({}, state, {
        allWells: state.allWells.concat(action.well),
      });

    default:
      return state;
  }
};

export default WellReducers;