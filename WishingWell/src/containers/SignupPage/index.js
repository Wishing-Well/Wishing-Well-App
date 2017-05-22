import React, {Component} from 'react';
import {
  View,
  TextInput,
  Button
} from 'react-native';
import { connect } from 'react-redux';
import {signup} from '../../actions';

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
    console.log(this.props);
    this.props.signup({
      full_name: this.state.full_name,
      email: this.state.email,
      password: this.state.password
    });
  };

  render() {
    return(
      <View>
        <TextInput
          onChangeText={(full_name)=> this.setState({full_name})}
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
          placeholder="Create Password (Min. 5 Char)"
          />
        <Button
          title="Sign Up"
          onPress={this.handleSignup}
          />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  signupErr: state.users.signupErr
})

const mapDispatchToProps = (dispatch) => ({
  signup: userInfo => dispatch(signup(userInfo)),
  navigate: routeName => dispatch(navigate(routeName))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
