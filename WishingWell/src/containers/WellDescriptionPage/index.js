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

  static navigationOptions = {
    headerTintColor: '#004B5B',
    headerStyle: {
      backgroundColor: '#e5f7fc',
      elevation: 0
    }
  }

  render() {
    const {well} = this.props.navigation.state.params;
    const {navigate} = this.props.navigation;
    console.log(well);
    return (
      <View style={styles.wholePage}>
      <View>

      </View>
        <Text style={styles.wellCurrent}>
          Collected: {well.current_amount}
        </Text>
        <Text style={styles.wellTarget}>
          Target: {well.funding_target}
        </Text>
        <View style={styles.progressBarContainer}>
          <View style ={[styles.progressBar, {width: `${well.current_amount / well.funding_target * 100}%`}]} />
        </View>
        <Text style={styles.wellDesc}>
          {well.description}
        </Text>
        <Button
          title="Wellit!"
          onPress={()=> navigate('WellPage', {well: well})}
          color='#84DBEF'
          />
        <Text style={styles.messagesTitle}>User Messages Who Donated</Text>
          {well.Messages.map(message => (
            <View key={message.id} style={styles.messageContainer}>
              <Text style={styles.eachMessage}>{message.message}</Text>
              <Text style={styles.messageUser}>{this.props.allUsers.filter(user => user.id == message.UserId)[0].full_name}</Text>
              <Text style={styles.messageDate}>{new Date(message.createdAt).toDateString()}</Text>
            </View>
            ))}
      </View>
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
