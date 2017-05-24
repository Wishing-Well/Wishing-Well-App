/*jshint esversion: 6*/
import React, { Component } from "react";
import { addNavigationHelpers, StackNavigator } from "react-navigation";
import {initialNav} from '../../routeConfig';

const InitialNavRoutes = StackNavigator(initialNav);

class InitialNav extends Component {
  render() {
    return (
      <InitialNavRoutes  />
    );
  }
}

export default InitialNav;