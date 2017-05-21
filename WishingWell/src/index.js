/*jshint esversion: 6*/
import React, { Component } from "react";
import { Provider } from "react-redux";
import store from './configureStore';
import AppNav from './containers/AppNav';

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNav />
      </Provider>
    );
  }
}

export default Root;