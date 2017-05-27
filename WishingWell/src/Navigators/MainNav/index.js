/*jshint esversion: 6*/
import React, { Component } from "react";
import { TabBarBottom, TabNavigator } from "react-navigation";
import {mainNav} from '../../routeConfig';

const tabBarOptions = {
  swipeEnabled: false,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    pressColor: '#F2C71B',
    labelStyle: {
      color: '#FFF',
      fontWeight: 'bold'
    },
    style: {
      backgroundColor: '#65D0E8',
    },
  }
};

const MainNavRoutes = TabNavigator(mainNav, tabBarOptions);

class MainNav extends Component {
  render() {
    return (
      <MainNavRoutes  />
    );
  }
}

export default MainNav;