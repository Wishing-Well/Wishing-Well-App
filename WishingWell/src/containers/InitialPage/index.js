import React, {Component} from 'react';
import {
  TextInput,
  View,
  Button
} from 'react-native';
import styles from './stylesheet';
import { connect } from 'react-redux';

class InitialPage extends Component {
  render() {
    return (
      <View>
        <TextInput style={styles.input}/>
        <TextInput />
        <Button title="Log In" />
        <Button title="Sign Up"/>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.loggedIn
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(InitialPage)