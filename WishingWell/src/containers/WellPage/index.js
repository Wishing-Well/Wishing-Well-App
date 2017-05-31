/*jshint esversion: 6*/
import React, {Component} from 'react';
import {
  TextInput,
  View,
  Text,
  Button,
  Slider
} from 'react-native';
import { connect } from 'react-redux';
import {donate} from '../../actions';

class WellPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      custom_donation: 0,
      message: ''
    };
  }

  render() {
    const {well} = this.props.navigation.state.params;
    const {navigate} = this.props.navigation;

    return (
      <View>
        <Text>
          {well.title}
        </Text>
        <Text>
          {well.description}
        </Text>
        <Text>
          Collected: {well.current_amount}
        </Text>
        <Text>
          Target: {well.funding_target}
        </Text>
        <View>
          <Button
            title="Donate $1"
            onPress={()=> navigate('Stripe', {amount: 100, makeCharge: this.props.donate, well_id: well.id})}
            color='#84DBEF'
            />
            <TextInput
              value={this.state.title}
              placeholder="Attach Message With Doantions of 5+"
              onChangeText={message => this.setState({message})}
              autoCorrect={false}
              />
          <Button
            title="Donate $5"
            onPress={()=> navigate('Stripe', {amount: 500, makeCharge: this.props.donate, well_id: well.id, message: this.state.message})}
            color='#84DBEF'
            />
          <Text>{'Donate a custom amount'}</Text>
          <Slider
            onValueChange={(custom_donation) => this.setState({custom_donation})}
            value={this.state.custom_donation}
            minimumValue={5}
            maximumValue={100}
            step={1}
            />
          <Button
            title={'Donate $' + this.state.custom_donation}
            onPress={()=> navigate('Stripe', {amount: this.state.custom_donation * 100, makeCharge: this.props.donate, well_id: well.id, message: this.state.message})}
            color='#84DBEF'
            />

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
