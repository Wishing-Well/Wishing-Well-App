import React from 'react';
import {
  AppRegistry
} from 'react-native';

import { Provider } from 'react-redux';
import { NativeRouter, Route, Link } from 'react-router-native';
import configureStore from './configureStore';
import InitialPage from './src/containers/InitialPage';
import SignupPage from './src/containers/SignupPage';
import ListPage from './src/containers/ListPage';

const store = configureStore();

const WishingWell = () => (
  <Provider store={store}>
    <NativeRouter>
      <Route path="/" component={InitialPage}/>
      <Route path="/signup" component={SignupPage}/>
      <Route path="/listview" component={ListPage}/>
    </NativeRouter>
  </Provider>
)

AppRegistry.registerComponent('WishingWell', () => ReduxApp)