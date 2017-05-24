/*jshint esversion: 6*/
import React, { Component } from "react";
import { addNavigationHelpers, TabNavigator } from "react-navigation";
import {mainNav} from '../../routeConfig';


const MainNavRoutes = TabNavigator(mainNav);

class MainNav extends Component {
  render() {
    return (
      <MainNavRoutes  />
    );
  }
}

export default MainNav;