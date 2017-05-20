/*jshint esversion: 6*/
import React, { Component } from "react";
import { Provider } from "react-redux";
import store from './configureStore';
import AppNav from './containers/AppNav';

export default () => (
  <Provider store={store}>
      <AppNav />
  </Provider>
);