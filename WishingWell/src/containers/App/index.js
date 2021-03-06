/*jshint esversion: 6*/
import React, {Component} from 'react';
import { connect } from 'react-redux';
import {AsyncStorage} from 'react-native';
import MainNav from '../../Navigators/MainNav';
import InitialNav from '../../Navigators/InitialNav';
import {loadApp, closeErrors, loginUser} from '../../actions';

class App extends Component {

  componentDidMount() {
    return AsyncStorage.multiGet(['email', 'user_id', 'loggedIn'])
      .then(stores => {
        if (stores[2][1] == 'true') {
          this.props.loginUser();
          this.props.loadApp(stores[1][1]);
        } else {
          this.props.loadApp();
        }
      })
      .catch(err => err);
  }

  render() {
    if(this.props.loggedIn) {
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

const mapDispatchToProps = dispatch => ({
  loadApp: () => dispatch(loadApp()),
  loginUser: asyncArray => dispatch(loginUser(asyncArray))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);