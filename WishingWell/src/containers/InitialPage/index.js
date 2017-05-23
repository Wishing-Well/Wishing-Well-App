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
import {login, navigate} from '../../actions';

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
      console.log(stores);
      if (stores[2] === 'true') {
        console.log(stores);
        this.props.loginUser(stores);
      }
    });
  }

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
          onPress={() => this.props.navigate('Signup')}
          style={styles.inputs}
          />
        <Button
          title="Map"
          onPress={() => this.props.navigate('MapPage')}
          style={styles.inputs}
          />
          {this.props.loginErr && Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
              {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
          )}
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
  navigate: routeName => dispatch(navigate(routeName))
})

export default connect(mapStateToProps, mapDispatchToProps)(InitialPage)