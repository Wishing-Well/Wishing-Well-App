/*jshint esversion: 6*/
import React, {Component} from 'react';
import {
  TextInput,
  View,
  Text,
  Button,
  Slider,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import {donate} from '../../actions';
import stripe from 'tipsi-stripe';
import {STRIPE_KEY} from '../../keys';
import { PaymentCardTextField } from 'tipsi-stripe';
import styles from './styles';

stripe.init({
  publishableKey: STRIPE_KEY
});

class WellPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 1,
      message: '',
      valid: false,
      params: {}
    };
  }


  static navigationOptions = {
    headerTintColor: '#65D0E8',
    headerStyle: {
      backgroundColor: '#e5f7fc',
      elevation: 50
    }
  }

  handleFieldParamsChange = (valid, params) => {
    this.setState({valid, params});
  }

  handleDonate = () => {
    stripe.createTokenWithCard(this.state.params)
      .then(token => {
        console.log(token);
        this.props.donate(this.props.navigation.state.params, this.state.amount, token, this.state.message)
      });
  };

  renderStepOne = () => {
    return (
      <View style={styles.firstStep}>
        <Text>Donation Amount: {this.state.amount} Dollars</Text>
        <Slider
          onValueChange={amount => this.setState({amount})}
          value={this.state.amount}
          minimumValue={1}
          maximumValue={100}
          step={1}
          />
        <PaymentCardTextField
          style={styles.field}
          cursorColor={'yellow'}
          textErrorColor={'red'}
          placeholderColor={'blue'}
          numberPlaceholder={'Card Number'}
          expirationPlaceholder={'mm/yy'}
          cvcPlaceholder={'cvc'}
          disabled={false}
          onParamsChange={this.handleFieldParamsChange}
        />
      </View>
    )
  }

  renderStepTwo = () => {
    return (
      <View style={styles.secondStep}>
        <TextInput
          value={this.state.message}
          placeholder="Attach Short Message With Donations of 5+"
          onChangeText={message => this.setState({message})}
          autoCorrect={false}
          maximumValue={20}
          />
      </View>
    )
  }

  renderStepThree = () => {
    return (
      <View style={styles.thirdStep}>
        <Button
          title={`Donate ${this.state.amount}$`}
          onPress={this.handleDonate}
          color='#84DBEF'
          />
      </View>
    )
  }

  render() {
    const {well} = this.props.navigation.state.params;
    return (
      <View style={styles.fullPage}>
        <View style={{flex: 2}}>
          {this.renderStepOne()}
        </View>
        <View style={{flex: 1}}>
          {this.state.amount >= 5 ? (
            this.renderStepTwo()
          ) : (
            null
          )}
        </View>
        <View style={{flex: 1}}>
          {this.state.valid ? (
            this.renderStepThree()
          ) : (
            null
          )}
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  globalErr: state.errors.globalErr
})

const mapDispatchToProps = (dispatch) => ({
  donate: (well_id, amount, token, message) => dispatch(donate(well_id, amount, token, message))
})

export default connect(mapStateToProps, mapDispatchToProps)(WellPage)
