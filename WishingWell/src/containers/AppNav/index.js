/*jshint esversion: 6*/
import React, { Component } from "react";
import { connect } from "react-redux";
import { addNavigationHelpers, TabNavigator } from "react-navigation";
import routes from '../../routeConfig';
import InitialPage from '../InitialPage';

export const Routes = TabNavigator(routes);

class AppNav extends Component {
  render() {
    return (
      <Routes  />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppNav);