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
import styles from './styles';

class WellPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {well} = this.props.navigation.state.params;
    const {navigate} = this.props.navigation;
    console.log(well);
    return (
      <View style={styles.wholePage}>
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
        <View style={styles.progressBarContainer}>
          <View style ={[styles.progressBar, {width: `${well.current_amount / well.funding_target * 100}%`}]} />
        </View>
        <Button
          title="Wellit!"
          onPress={()=> navigate('WellPage', {well: well})}
          color='#84DBEF'
          />
        <Text>
          Messages from past wellitors
        </Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  globalErr: state.errors.globalErr
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(WellPage)
