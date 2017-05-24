import InitialPage from './containers/InitialPage';
import SignupPage from './containers/SignupPage';
import MapPage from './containers/Map';
import ListPage from './containers/ListPage';
import ProfilePage from './containers/ProfilePage';

export default {
  Home: { screen: InitialPage },
  Signup: {screen: SignupPage},
  //MapPage: {screen: MapPage},
  ListPage: {screen: ListPage},
  ProfilePage: {screen: ProfilePage}
};
