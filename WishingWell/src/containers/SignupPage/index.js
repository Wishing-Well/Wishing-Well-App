import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { connect } from 'react-redux';
import styles from './styles.js';
import {signup} from '../../actions';
import LoadingScreen from '../LoadingScreen'

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      full_name: '',
      email: '',
      password: '',
      togglePW: true
    };
  }

  static navigationOptions= {
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#65D0E8',
      elevation: 0
    }
  }

  componentDidMount() {
    if (this.props.loggedIn) {
      this.props.navigation.navigate('MapPage');
    }
  }

  validateEmail = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  };

  handleSignup = () => {
    if(!this.validateEmail(this.state.email)) {
      return this.setState({email: '', password: ''});
    }
    if(this.state.password.length < 5) {
      return this.setState({password: ''});
    }
    this.props.signup({
      full_name: this.state.full_name,
      email: this.state.email,
      password: this.state.password
    });
  };

  render() {
    if(this.props.loading) return (<LoadingScreen/>);
    return(
      <KeyboardAvoidingView
        behavior="padding"
        style={styles.container}
        keyboardVerticalOffset={
        Platform.select({
           ios: () => 0,
           android: () => -150
        })()
      }>
         {this.props.signNameErr &&
            (<Text style={{color: 'red'}}>{this.props.errMessage}</Text>)
          }
      <View style={styles.formContainer}>
        <TextInput
          style={styles.formInput}
          placeholderTextColor="rgba(255,255,255,0.7)"
          underlineColorAndroid='rgba(0,0,0,0)'
          autoCorrect={false}
          keyboardType="email-address"
          onChangeText={(full_name)=> this.setState({full_name})}
          value={this.state.fullname}
          placeholder="Enter Full Name"
          />
          {this.props.signEmailErr &&
            (<Text style={{color: 'red'}}>{this.props.errMessage}</Text>)
          }
        <TextInput
          style={styles.formInput}
          placeholderTextColor="rgba(255,255,255,0.7)"
          underlineColorAndroid='rgba(0,0,0,0)'
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(email)=> this.setState({email})}
          value={this.state.email}
          placeholder="Enter Email"
          keyboardType="email-address"
          />
           {this.props.signPwErr &&
            (<Text style={{color: 'red'}}>{this.props.errMessage}</Text>)
          }
        <TextInput
          style={styles.formInput}
          placeholderTextColor="rgba(255,255,255,0.7)"
          underlineColorAndroid='rgba(0,0,0,0)'
          autoCorrect={false}
          onChangeText={(password)=> this.setState({password})}
          secureTextEntry={this.state.togglePW}
          value={this.state.password}
          placeholder="Create Password (Min. 6 Char)"
          />
        <TouchableOpacity style={styles.buttonContainer} onPress={this.handleSignup}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View >
      </KeyboardAvoidingView>
    )
  }
}

const mapStateToProps = state => ({
  signEmailErr: state.errors.signEmailErr,
  signNameErr: state.errors.signNameErr,
  signPwErr: state.errors.signPwErr,
  globalErr: state.errors.globalErr,
  errMessage: state.errors.errMessage,
  loading: state.wells.loading
})

const mapDispatchToProps = (dispatch) => ({
  signup: userInfo => dispatch(signup(userInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
