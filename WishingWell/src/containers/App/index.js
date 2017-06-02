/*jshint esversion: 6*/
import React, {Component} from 'react';
import { connect } from 'react-redux';
import {AsyncStorage} from 'react-native';
import MainNav from '../../Navigators/MainNav';
import InitialNav from '../../Navigators/InitialNav';
import {loadApp, closeErrors, loginUser} from '../../actions';
import LoadingScreen from '../LoadingScreen'

class App extends Component {

  componentDidMount() {
    return AsyncStorage.multiGet(['email', 'user_id', 'loggedIn'])
      .then(stores => {
        if (stores[2][1] == 'true') {
          this.props.loginUser()
            .then(console.log);
          this.props.loadApp(stores[1][1])
            .then(console.log);
        } else {
          this.props.loadApp()
            .then(console.log);
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    if(this.props.loading) return (<LoadingScreen/>);
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
  loggedIn: state.users.loggedIn,
  loading: state.wells.loading
});

const mapDispatchToProps = dispatch => ({
  loadApp: () => dispatch(loadApp()),
  loginUser: asyncArray => dispatch(loginUser(asyncArray))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);