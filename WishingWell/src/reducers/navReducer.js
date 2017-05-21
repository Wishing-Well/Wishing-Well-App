/*jshint esversion: 6*/
import { NavigationActions, StackNavigator } from 'react-navigation';
import routeConfig from "../routeConfig.js";
import * as types from '../constants';

const Routes = StackNavigator(routeConfig);


const initialNavState = Routes.router.getStateForAction(Routes.router.getActionForPathAndParams('Home'));

const navReducer = (state = initialNavState, action) => {
  let nextState;
  console.log(action);
  switch (action.type) {
    case types.NAVIGATE:
      nextState = Routes.router.getStateForAction(Routes.router.getActionForPathAndParams(action.routeName));
      break;
    default:
      nextState = Routes.router.getStateForAction(action, state);
      break;
  }

  return nextState || state;
};

export default navReducer;