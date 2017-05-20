/*jshint esversion: 6*/
import React, { Component } from "react";
import { connect } from "react-redux";
import { addNavigationHelpers } from "react-navigation";
import Routes from "../../routeConfig.js";

const AppNav = ({ dispatch, nav }) => (
  <Routes navigation={addNavigationHelpers({ dispatch, state: nav })} />
);


AppNav.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppNav);