import React from 'react';
import {
  AppRegistry
} from 'react-native';

import { Provider } from 'react-redux';
import { NativeRouter, Route, Link } from 'react-router-native';
import configureStore from './configureStore';
import App from './src';

const store = configureStore();

const WishingWell = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent('WishingWell', () => ReduxApp)
