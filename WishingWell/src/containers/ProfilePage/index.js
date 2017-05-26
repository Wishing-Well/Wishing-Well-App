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
  static navigationOptions = {
    header: null,
  }

  render() {
    const {navigate} = this.props.navigation;
    return(
      <View>
        <Text>
          Current Location: {navigator.geolocation.getCurrentPosition(position => position.coords.latitude)}
        </Text>
        <Button
          title="Check Out Your Well"
          onPress={()=> navigate("WellsListPage")}
          />
        <Button
          title="See Your Donations"
          onPress={()=> navigate("DonationsPage")}
          />
        <Button
          title="Create Your Own Well"
          onPress={()=> navigate("CreateWellPage")}
          />
        <Button
          title="Log Out"
          onPress={this.props.logout}
          />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  userInfo: state.users.userInfo,
  globalErr: state.errors.globalErr
})

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
