/*jshint esversion: 6*/
import {StackNavigator} from 'react-navigation';
import SignupPage from './containers/SignupPage';
import MapPage from './containers/MapPage';
import ListPage from './containers/ListPage';
import ProfilePage from './containers/ProfilePage';
import StorePage from './containers/StorePage';
import LoginPage from './containers/LoginPage';
import WellPage from './containers/WellPage';
import GamePage from './containers/GamePage';
import DonationsPage from './containers/DonationsPage';
import CreateWellPage from './containers/CreateWellPage';


export const mapNav = {
  Home: {screen: MapPage},
  WellPage: {screen: WellPage},
  GamePage: {screen: GamePage}
};

export const listNav = {
  Home: {screen: ListPage},
  WellPage: {screen: WellPage},
  GamePage: {screen: GamePage}
};

export const profileNav = {
  Home: {screen: ProfilePage},
  WellPage: {screen: WellPage},
  CreateWellPage: {screen: CreateWellPage},
  DonationsPage: {screen: DonationsPage}
};

export const storeNav = {
  Home: {screen: StorePage}
};

export const mainNav = {
  'Map View': {screen: StackNavigator(mapNav)},
  'List View': {screen: StackNavigator(listNav)},
  Profile: {screen: StackNavigator(profileNav)},
  Store: {screen: StackNavigator(storeNav)}
};

export const initialNav = {
  Login: {screen: LoginPage},
  'Sign Up': {screen: SignupPage}
};