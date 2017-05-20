import { StackNavigator } from 'react-navigation';
import InitialPage from './containers/InitialPage';
import SignupPage from './containers/SignupPage';

export default StackNavigator({
  Home: { screen: InitialPage },
  Signup: {screen: SignupPage}
});
