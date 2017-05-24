import React, {Component} from 'react';
import {
  View,
  TextInput,
  Button,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import {logout} from '../../actions';

class ProfilePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View>
        <Text>
          Current Location: {navigator.geolocation.getCurrentPosition(position => position.coords.latitude)}
        </Text>
        <Button
          title="Check Out Your Well"
          onPress={()=> this.props.navigate("WellPage")}
          />
        <Button
          title="See Your Donations"
          onPress={()=> this.props.navigate("DonationsPage")}
          />
        <Button
          title="Create Your Own Well"
          onPress={()=> this.props.navigate("CreateWellPage")}
          />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  userInfo: state.users.userInfo
})

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
