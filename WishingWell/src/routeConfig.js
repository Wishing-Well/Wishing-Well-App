/*jshint esversion: 6*/
import {StackNavigator} from 'react-navigation';
import SignupPage from './containers/SignupPage';
import MapPage from './containers/MapPage';
import ListPage from './containers/ListPage';
import ProfilePage from './containers/ProfilePage';
import LoginPage from './containers/LoginPage';
import WellPage from './containers/WellPage';
import DonationsPage from './containers/DonationsPage';
import CreateWellPage from './containers/CreateWellPage';
import WellDescriptionPage from './containers/WellDescriptionPage';


export const mapNav = {
  Home: {screen: MapPage},
  WellPage: {
    screen: WellPage,
    navigationOptions: ({navigation}) => ({
      title: `Donating To ${navigation.state.params.well.title}`
    })
  },
  WellDescription: {
    screen: WellDescriptionPage,
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.well.title}`
    })
  }
};

export const listNav = {
  Home: {screen: ListPage},
  WellPage: {
    screen: WellPage,
    navigationOptions: ({navigation}) => ({
      title: `Donating To ${navigation.state.params.well.title}`
    })
  },
  WellDescription: {
    screen: WellDescriptionPage,
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.well.title}`
    })
  }
};

export const profileNav = {
  Home: {screen: ProfilePage},
  WellPage: {
    screen: WellPage,
    navigationOptions: ({navigation}) => ({
      title: `Donating To ${navigation.state.params.well.title}`
    })
  },
  CreateWellPage: {screen: CreateWellPage},
  DonationsPage: {
    screen: DonationsPage
  },
  WellDescription: {
    screen: WellDescriptionPage,
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.well.title}`
    })
  }
};


export const mainNav = {
  'Map View': {screen: StackNavigator(mapNav)},
  'List View': {screen: StackNavigator(listNav)},
  Profile: {screen: StackNavigator(profileNav)}
};

export const initialNav = {
  Login: {screen: LoginPage},
  'Sign Up': {screen: SignupPage}
};