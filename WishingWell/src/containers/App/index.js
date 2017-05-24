/*jshint esversion: 6*/
import React, {Component} from 'react';
import {
  TextInput,
  View
} from 'react-native';
import { connect } from 'react-redux';
import AppNav from '../AppNav';
import InitialNav from '../InitialNav';

class App extends Component {

  render() {
    if(this.props.loggedIn) {
      return (
        <AppNav />
      );
    } else {
      return (
        <InitialNav />
      );
    }
  }
}

const mapStateToProps = state => ({
  loggedIn: state.users.loggedIn
});

export default connect(mapStateToProps)(App);