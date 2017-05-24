/*jshint esversion: 6*/
import React, { Component } from "react";
import { addNavigationHelpers, TabNavigator } from "react-navigation";
import {appNav} from '../../routeConfig';


export const AppNavRoutes = TabNavigator(appNav);

class AppNav extends Component {
  render() {
    return (
      <AppNavRoutes  />
    );
  }
}

export default AppNav;