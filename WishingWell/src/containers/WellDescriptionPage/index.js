/*jshint esversion: 6*/
import React, {Component} from 'react';
import {
  TextInput,
  View,
  Text,
  Button,
  Slider,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import {donate} from '../../actions';
import styles from './styles';

class WellPage extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    headerTintColor: '#004B5B',
    headerStyle: {
      backgroundColor: '#e5f7fc',
      elevation: 0
    },
    tabBarIcon: () => (
      <Image
        source={require('../../assets/well.png')}
        style={styles.icon}
      />
    )
  }

  getWidth(current, target) {
    let width = current / target;
    if (width > 1) {
      width = 0.98
    }
    return `${width * 100}%`
  }

  render() {
    const {well} = this.props.navigation.state.params;
    const {navigate} = this.props.navigation;
    console.log(well);
    return (
      <ScrollView style={styles.masterPage}>
      <View style={styles.wholePage}>
        <View style={styles.wellAmounts}>
          <Text style={styles.wellCurrent}>
            Funded: ${(well.current_amount / 100).toFixed(2)} / ${(well.funding_target / 100).toFixed(2)}
          </Text>
        </View>
        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBar, {width: this.getWidth(well.current_amount, well.funding_target)}]}/>
        </View>
        <Text style={styles.descTitle}>
          Well Story
        </Text>
        <Text style={styles.wellDesc}>
          {well.description}
        </Text>
        <TouchableOpacity style={styles.submitButton} onPress={()=> navigate('WellPage', {well: well})}>
          <Text style={styles.buttonText}>Donate</Text>
        </TouchableOpacity>
        <Text style={styles.messagesTitle}>Message Board</Text>
          {well.Messages.map(message => (
            <View key={message.id} style={styles.messageContainer}>
              <Text style={styles.messageUser}>{this.props.allUsers.filter(user => user.id == message.UserId)[0].full_name}</Text>
              <Text style={styles.messageDate}>{new Date(message.createdAt).toDateString()}</Text>
              <Text style={styles.eachMessage}>{message.message}</Text>
            </View>
            ))}
      </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  globalErr: state.errors.globalErr,
  allUsers: state.users.allUsers
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(WellPage)
