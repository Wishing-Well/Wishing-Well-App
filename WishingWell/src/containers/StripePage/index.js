/*jshint esversion: 6*/
import React, { Component } from 'react';
import {View, Button, StyleSheet} from 'react-native';
import stripe from 'tipsi-stripe';
import {STRIPE_KEY} from '../../keys';
import { PaymentCardTextField } from 'tipsi-stripe';

stripe.init({
  publishableKey: STRIPE_KEY
});

const styles = StyleSheet.create({
  field: {
    width: 300,
    color: '#449aeb',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
  }
})

class StripePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valid: false,
      params: {}
    };
  }

  handleFieldParamsChange = (valid, params) => {
    this.setState({valid, params});
  }

  handlePayment = () => {
    stripe.createTokenWithCard(this.state.params)
      .then(token => {
        console.log(token);
        this.props.navigation.state.params.donate(this.props.navigation.state.params.well_id, this.props.navigation.state.params.amount, token);
      });
  };

  render() {
    return (
      <View>
        <PaymentCardTextField
          style={styles.field}
          cursorColor={"blue"}
          textErrorColor={"red"}
          placeholderColor={"green"}
          numberPlaceholder={""}
          expirationPlaceholder={""}
          cvcPlaceholder={"-"}
          disabled={false}
          onParamsChange={this.handleFieldParamsChange}
        />
        {
          this.state.valid &&
          <Button
            title="Make Donation"
            onPress={this.handlePayment}
          />
        }
      </View>
    )
  }
}

export default StripePage;