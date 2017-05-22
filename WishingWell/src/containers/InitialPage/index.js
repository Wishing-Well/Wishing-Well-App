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
      email: '',
      password: ''
    };
  }

  validateEmail = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  };

  handleLogin = () => {
    if(!this.validateEmail(this.state.email)) {
      this.setState({email: '', password: ''});
    } else {
      this.props.login(this.state.username, this.state.password);
    }
  };

  render() {
    return (
      <View
        style={styles.container}
        >
        <TextInput
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
          placeholder="Email"
          style={styles.inputs}
          />
        <TextInput
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          placeholder="Password"
          style={styles.inputs}
          />
        <Button
          title="Log In"
          onPress={this.handleLogin}
          style={styles.inputs}
          />
        <Button
          title="Sign Up"
          onPress={() => this.props.navigate('Signup')}
          style={styles.inputs}
          />
        <Button
          title="Map"
          onPress={() => this.props.navigate('MapPage')}
          style={styles.inputs}
          />
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