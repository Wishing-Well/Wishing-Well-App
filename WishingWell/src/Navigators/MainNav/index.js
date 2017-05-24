/*jshint esversion: 6*/
import React, { Component } from "react";
import { TabBarBottom, TabNavigator } from "react-navigation";
import {mainNav} from '../../routeConfig';

const tabNavOptions = {
  tabBarPosition: 'bottom',
  inactiveBackgroundColor: '#84dbef',
  activeBackgroundColor: '#65d0e8',
  labelStyle: {
    fontSize: 15
  },
  style: {
    backgroundColor: '#65d0e8'
  }
};


const MainNavRoutes = TabNavigator(mainNav, tabNavOptions);

class MainNav extends Component {
  render() {
    return (
      <MainNavRoutes  />
    );
  }
}

export default MainNav;