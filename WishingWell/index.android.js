/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import App from './src';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/reducers';

const store = createStore(
  reducers
);

class WishingWell extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
          <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('WishingWell', () => WishingWell);