import { NavigationActions } from 'react-navigation';
import Routes from "../routeConfig.js";

const initialNavState = AppNavigator.router.getStateForAction(
  secondAction,
  tempNavState
);

const navReducer = (state = initialNavState, action) => {
  let nextState;
  switch (action.type) {
    default:
      nextState = Routes.router.getStateForAction(action, state);
      break;
}