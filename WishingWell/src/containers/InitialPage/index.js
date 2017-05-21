import React, {Component} from 'react';
import {
  TextInput,
  View,
  Button
} from 'react-native';
import styles from './stylesheet';
import { connect } from 'react-redux';
import {login, navigate} from '../../actions';

class InitialPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  handleLogin(){
    this.props.login(this.state.username, this.state.password);
  }

  render() {
    return (
      <View>
        <TextInput style={styles.input} onChangeText={(username) => this.setState({username})}/>
        <TextInput />
        <Button title="Log In" onPress={this.handleLogin}/>
        <Button title="Sign Up" onPress={() => this.props.navigate('Signup')}/>
        <Button title="Map" onPress={() => this.props.navigate('MapPage')}/>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.users.loggedIn
})

const mapDispatchToProps = (dispatch) => ({
  login: (username, password) => dispatch(login(username, password)),
  navigate: routeName => dispatch(navigate(routeName))
})

export default connect(mapStateToProps, mapDispatchToProps)(InitialPage)