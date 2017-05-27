import React, {Component} from 'react';
import {
  Text,
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
    console.log(this.props)
    return(
      <View>
         {this.props.signNameErr &&
            (<Text style={{color: 'red'}}>{this.props.errMessage}</Text>)
          }
        <TextInput
          onChangeText={(full_name)=> this.setState({full_name})}
          value={this.state.fullname}
          placeholder="Enter Full Name"
          />
          {this.props.signEmailErr &&
            (<Text style={{color: 'red'}}>{this.props.errMessage}</Text>)
          }
        <TextInput
          onChangeText={(email)=> this.setState({email})}
          value={this.state.email}
          placeholder="Enter Email"
          keyboardType="email-address"
          />
           {this.props.signPwErr &&
            (<Text style={{color: 'red'}}>{this.props.errMessage}</Text>)
          }
        <TextInput
          onChangeText={(password)=> this.setState({password})}
          secureTextEntry={this.state.togglePW}
          value={this.state.password}
          placeholder="Create Password (Min. 6 Char)"
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
  signEmailErr: state.errors.signEmailErr,
  signNameErr: state.errors.signNameErr,
  signPwErr: state.errors.signPwErr,
  globalErr: state.errors.globalErr,
  errMessage: state.errors.errMessage
})

const mapDispatchToProps = (dispatch) => ({
  signup: userInfo => dispatch(signup(userInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
