import React, {Component} from 'react';
import {
  View,
  TextInput,
  Button
} from 'react-native';

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      password: '',
      togglePW: true
    };
  }

  validateEmail = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  };

  handleSignup = () => {
    if(!this.validateEmail(this.state.email)) {
      this.setState({email: ''});
    }
  };

  render() {
    return(
      <View>
        <TextInput
          onChangeText={(fullName)=> this.setState({fullName})}
          value={this.state.fullname}
          placeholder="Enter Full Name"
          />
        <TextInput
          onChangeText={(email)=> this.setState({email})}
          value={this.state.email}
          placeholder="Enter Email"
          keyboardType="email-address"
          />
        <TextInput
          onChangeText={(password)=> this.setState({password})}
          secureTextEntry={this.state.togglePW}
          value={this.state.password}
          placeholder="Create Password"
          />
        <Button
          title="Sign Up"
          onPress={this.handleSignup}
          />
      </View>
    )
  }
}

export default SignupPage;
