/*jshint esversion: 6*/
import { NavigationActions, StackNavigator } from 'react-navigation';
import routeConfig from "../routeConfig.js";

const Routes = StackNavigator(routeConfig);


const initialNavState = Routes.router.getStateForAction(Routes.router.getStateForAction(Routes.router.getActionForPathAndParams('Home')));

const navReducer = (state = initialNavState, action) => {
  let nextState;
  switch (action.type) {
    default:
      nextState = Routes.router.getStateForAction(action, state);
      break;
  }

  return nextState || state;
};

export default navReducer;