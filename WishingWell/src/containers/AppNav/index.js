/*jshint esversion: 6*/
import React, { Component } from "react";
import { connect } from "react-redux";
import { addNavigationHelpers, StackNavigator } from "react-navigation";
import routes from '../../routeConfig';
import InitialPage from '../InitialPage';

export const Routes = StackNavigator(routes);

class AppNav extends Component {
  render() {
    return (
      <Routes navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav
      })} />
    )
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppNav);