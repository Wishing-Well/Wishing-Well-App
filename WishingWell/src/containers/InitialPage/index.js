import React, {Component} from 'react';
import {
  TextInput,
  View
} from 'react-native';
import styles from './stylesheet';

export default class InitialPage extends Component {
  render() {
    return (
      <View>
        <TextInput style={styles.input}/>
        <TextInput />
      </View>
    )
  }
}
