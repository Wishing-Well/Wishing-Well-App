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
      custom_donation: 0
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
            onPress={()=> navigate('StripePage', {well_id: well.id, amount: 100, donate:this.props.donate})}
            color='#84DBEF'
            />
          <Button
            title="Donate $5"
            onPress={()=> navigate('StripePage', {well_id: well.id, amount: 500, donate:this.props.donate})}
            color='#84DBEF'
            />
          <Text>{'Donate a custom amount'}</Text>
          <Slider
            onValueChange={(custom_donation) => this.setState({custom_donation})}
            value={this.state.custom_donation}
            minimumValue={0}
            maximumValue={100}
            step={1}
            />
          <Button
            title={'Donate $' + this.state.custom_donation}
            onPress={()=> navigate('StripePage', {well_id: well.id, amount: this.state.custom_donation * 100, donate:this.props.donate})}
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
  donate: (well_id, amount) => dispatch(donate(well_id, amount))
})

export default connect(mapStateToProps, mapDispatchToProps)(WellPage)
