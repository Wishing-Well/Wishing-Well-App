/*jshint esversion: 6*/
import React, {Component} from 'react';
import {
  TextInput,
  View,
  Button,
  StatusBar,
  Alert,
  AsyncStorage,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import styles from './styles.js';
import {login, navigate, loginUser} from '../../actions';

class InitialPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  static navigationOptions = {
    header: null,
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
    const {navigate} = this.props.navigation;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar backgroundColor="#65D0E8"/>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../assets/Coin.png')}
          />
        </View>
        <View style={styles.formContainer}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="rgba(255,255,255,0.7)"
            underlineColorAndroid='rgba(0,0,0,0)'
            style={styles.formInput}
            onChangeText={(email) => this.setState({email})}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            value={this.state.email}
            />
          <TextInput
            placeholder="Password"
            placeholderTextColor="rgba(255,255,255,0.7)"
            underlineColorAndroid='rgba(0,0,0,0)'
            style={styles.formInput}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            secureTextEntry={true}
            />
          {this.props.loginErr &&
            (<Text style={{color: '#F0766A', textAlign: 'center', paddingBottom: 10}}>{this.props.errMessage}</Text>)
          }
          <TouchableOpacity style={styles.buttonContainer} onPress={this.handleLogin}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => navigate('Sign Up')}>
           <Text style={styles.buttonText}>SIGN UP</Text>
          </TouchableOpacity>
        </View >
    </KeyboardAvoidingView>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.users.loggedIn,
  userInfo: state.users.userInfo,
  globalErr: state.errors.globalErr,
  loginErr: state.errors.loginErr,
  errMessage: state.errors.errMessage
})

const mapDispatchToProps = (dispatch) => ({
  login: (username, password) => dispatch(login(username, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(InitialPage)