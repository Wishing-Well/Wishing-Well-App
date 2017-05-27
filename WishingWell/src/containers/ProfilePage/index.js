import React, {Component} from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import {logout} from '../../actions';
import styles from './styles';

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
      <View style={styles.wholeContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.pageTitle}>
            PROFILE
          </Text>
          <Text style={styles.allText}>
            Hello {this.props.userInfo.full_name}
          </Text>
          <Text style={styles.allText}>
            Account E-Mail: {this.props.userInfo.email}
          </Text>
          <Text style={styles.allText}>
            Inventory: ${this.props.userInfo.coin_inventory / 100}
          </Text>
          <Text style={styles.allText}>
            Donated: ${this.props.userInfo.amount_donated / 100}
          </Text>
        </View>
        <View style={styles.wellContainer}>
          <TouchableOpacity>
            <Text style={styles.allText}>
              Your Well
            </Text>
            <Text style={styles.allText}>
              {'It is free to create a well'}
            </Text>
            <Text style={styles.allText}>
              {'Create a well below'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="See Your Donations"
            onPress={()=> navigate("DonationsPage")}
            color='#84DBEF'
            />
          <Button
            title="Create Your Own Well"
            onPress={()=> navigate("CreateWellPage")}
            color='#84DBEF'
            />
          <Button
            title="Log Out"
            onPress={this.props.logout}
            color='#84DBEF'
            />
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  userInfo: state.users.userInfo,
  globalErr: state.errors.globalErr,
  user_well: state.wells.user_well
})

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
