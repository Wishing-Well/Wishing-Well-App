import React, {Component} from 'react';
import {
  TextInput,
  View
} from 'react-native';
import InitialPage from './containers/InitialPage';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <View>
        <InitialPage />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.loggedIn
})

const mapDispatchToProps = (dispatch) => ({
})

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)

export default ConnectedApp;