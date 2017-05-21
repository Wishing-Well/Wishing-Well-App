/*jshint esversion: 6*/
import React, { Component } from "react";
import { connect } from "react-redux";
import { addNavigationHelpers, StackNavigator } from "react-navigation";
import InitialPage from '../InitialPage';
import SignupPage from '../SignupPage';

export const Routes = StackNavigator({
  Home: { screen: InitialPage },
  Signup: {screen: SignupPage}
});

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