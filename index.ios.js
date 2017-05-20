import React from 'react';
import {
  AppRegistry
} from 'react-native';

import { Provider } from 'react-redux';
import configureStore from './configureStore';
import App from './src';

const store = configureStore();

const WishingWell = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent('WishingWell', () => ReduxApp)
