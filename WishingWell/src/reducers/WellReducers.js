/*jshint esversion: 6*/
import * as types from '../lib/constants';

const initialState = {
  allWells: [],
  loading: false
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
    case types.SHOW_LOADING:
      return Object.assign({}, state, {
        loading: true
      });
    case types.CLOSE_LOADING:
      return Object.assign({}, state, {
        loading: false
      });


    default:
      return state;
  }
};

export default WellReducers;