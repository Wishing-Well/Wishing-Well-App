import SignupPage from './containers/SignupPage';
import MapPage from './containers/Map';
import ListPage from './containers/ListPage';
import ProfilePage from './containers/ProfilePage';
import StorePage from './containers/StorePage';
import LoginPage from './containers/LoginPage';

export const appNav = {
  'Map View': {screen: MapPage},
  'List View': {screen: ListPage},
  Profile: {screen: ProfilePage},
  Store: {screen: StorePage}
};

export const initialNav = {
  Login: {screen: LoginPage},
  'Sign Up': {screen: SignupPage}
};