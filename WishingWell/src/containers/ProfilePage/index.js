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

    this.title= props.userInfo.email;
  }
  static navigationOptions = {
    tapBarLabel: 'My Profile',
  };

  render() {
    return(
      <View>
        <Text>
          Email: {this.props.userInfo.email}
        </Text>
        <Text>
          WishCoins: {this.props.userInfo.coins || 100} Coins
        </Text>
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
  navigate: routeName => dispatch(navigate(routeName))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
