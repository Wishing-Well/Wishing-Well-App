import React, {Component} from 'react';
import {
  TextInput,
  View,
  Button,
  StatusBar,
  Alert,
  AsyncStorage
} from 'react-native';
import styles from './stylesheet';
import { connect } from 'react-redux';
import {login, navigate, loginUser} from '../../actions';

class InitialPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  componentDidMount() {
    AsyncStorage.multiGet(['email', 'user_id', 'loggedIn'], (err, stores) => {
      if (stores[2][1] == 'true') {
        this.props.loginUser(stores);
        //this.props.navigation.navigate('MapPage');
      }
    });
  }
  static navigationOptions = {
    tapBarLabel: 'Login',
  };

  validateEmail = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  };

  handleLogin = () => {
    if(!this.validateEmail(this.state.email)) {
      return this.setState({email: '', password: ''});
    }
    this.props.login(this.state.email, this.state.password);
  };

  render() {
    const { navigate } = this.props.navigation;
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
          secureTextEntry={true}
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
          onPress={() => navigate('Signup')}
          style={styles.inputs}
          />
        <Button
          title="Map"
          onPress={() => navigate('MapPage')}
          style={styles.inputs}
          />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.users.loggedIn,
  userInfo: state.users.userInfo,
  loginErr: state.users.loginErr
})

const mapDispatchToProps = (dispatch) => ({
  login: (username, password) => dispatch(login(username, password)),
  loginUser: asyncArray => dispatch(loginUser(asyncArray)),
})

export default connect(mapStateToProps, mapDispatchToProps)(InitialPage)