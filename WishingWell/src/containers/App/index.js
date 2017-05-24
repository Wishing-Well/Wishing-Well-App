/*jshint esversion: 6*/
import React, {Component} from 'react';
import { connect } from 'react-redux';
import MainNav from '../../navigators/MainNav';
import InitialNav from '../../navigators/InitialNav';

class App extends Component {

  render() {
    if(!this.props.loggedIn) {
      return (
        <MainNav />
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