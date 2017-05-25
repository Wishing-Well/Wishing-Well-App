/*jshint esversion: 6*/
import * as types from '../lib/constants';

const initialState = {
  allWells: [],
  user_well: null,
  user_donations: [],
};

const UserReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.ALL_WELLS:
      return Object.assign({}, state, {
        allWells: action.wells
      });

    case types.USER_WELL:
      return Object.assign({}, state, {
        user_well: action.well
      });

    case types.USER_DONATIONS:
      return Object.assign({}, state, {
        user_donations: action.donations
      });

    case types.ADD_WELL:
      return Object.assign({}, state, {
        allWells: state.allWells.concat([action.well]),
        user_well: action.well
      });

    case types.ADD_DONATION:
      return Object.assign({}, state, {
        user_donations: state.user_donations.concat([action.donation])
      });

    default:
      return state;
  }
};

export default UserReducers;