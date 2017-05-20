import { NavigationActions } from 'react-navigation';
import Routes from "../routeConfig.js";

const initialNavState = Routes.router.getStateForAction(Routes.router.getActionForPathAndParams('Home'));

const navReducer = (state = initialNavState, action) => {
  let nextState;
  switch (action.type) {
    default:
      nextState = Routes.router.getStateForAction(action, state);
      break;
  }

  return nextState || state;
};