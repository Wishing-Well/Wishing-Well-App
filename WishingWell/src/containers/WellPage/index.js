/*jshint esversion: 6*/
import React, {Component} from 'react';
import {
  TextInput,
  View,
  Text,
  Button,
  Slider,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import {donate} from '../../actions';
import stripe from 'tipsi-stripe';
import {STRIPE_KEY} from '../../keys';
import { PaymentCardTextField } from 'tipsi-stripe';
import styles from './styles';
import LoadingScreen from '../LoadingScreen'

stripe.init({
  publishableKey: STRIPE_KEY
});

class WellPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      well_id: props.navigation.state.params.well.id,
      amount: 1,
      message: '',
      valid: false,
      params: {}
    };
  }


  static navigationOptions = {
    headerTintColor: '#004B5B',
    headerStyle: {
      backgroundColor: '#e5f7fc',
      elevation: 0
    },
    tabBarIcon: () => (
      <Image
        source={require('../../assets/donation.png')}
        style={styles.icon}
      />
    )
  }

  handleFieldParamsChange = (valid, params) => {
    this.setState({valid, params});
  }

  handleDonate = () => {
    this.props.donate(this.state)
      .then(check => {
        console.log(check);
        if(check) {
          this.setState({
            well_id: this.props.navigation.state.params.well.id,
            amount: 1,
            message: '',
            valid: false,
            params: {}
          })
          this.props.navigation.goBack()
        } else {
          this.setState({
            valid: false,
            params: {}
          })
        }
      })
  };

  renderStepOne = () => {
    return (
      <View style={styles.firstStep}>
        <Text style={styles.amountText}>Donation Amount: ${this.state.amount}.00</Text>
        <Slider
          style={styles.amountSlider}
          onValueChange={amount => this.setState({amount})}
          value={this.state.amount}
          minimumValue={1}
          maximumValue={100}
          step={1}
          thumbTintColor={'#65D0E8'}
          />
        <PaymentCardTextField
          style={styles.field}
          cursorColor={'yellow'}
          textErrorColor={'red'}
          placeholderColor={'#65D0E8'}
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
          style={styles.messageInput}
          value={this.state.message}
          placeholder="Post a note with your donation (max.50)"
          onChangeText={message => this.setState({message})}
          autoCorrect={false}
          maxLength={50}
          />
      </View>
    )
  }

  renderStepThree = () => {
    return (
      <View style={styles.thirdStep}>
        <TouchableOpacity style={styles.submitButton} onPress={this.handleDonate}>
          <Text style={styles.buttonText}>{`Donate $${this.state.amount}`}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    if(this.props.loading) return (<LoadingScreen/>);
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
  globalErr: state.errors.globalErr,
  loading: state.wells.loading
})

const mapDispatchToProps = (dispatch) => ({
  donate: (info) => dispatch(donate(info))
})

export default connect(mapStateToProps, mapDispatchToProps)(WellPage)
