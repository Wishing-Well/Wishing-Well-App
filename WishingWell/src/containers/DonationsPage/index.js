import React, {Component} from 'react';
import {
  TextInput,
  View,
  TouchableOpacity,
  Image,
  Text,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import styles from './styles'
import {refreshDonations} from '../../actions';

class DonationsPage extends Component {

  static navigationOptions = {
    title: 'My Donations',
    headerTintColor: '#004B5B',
    headerStyle: {
      backgroundColor: '#e5f7fc',
      elevation: 0
    },
    tabBarIcon: () => (
      <Image
        source={require('../../assets/coins.png')}
        style={styles.icon}
      />
    )
  }


  render() {
    const {navigate} = this.props.navigation;
    const {userInfo} = this.props
    return (
     <ScrollView style={styles.scrollView}>
      <View style={styles.wholeContainer}>
        {userInfo.Donations.map(donation => (
          <TouchableOpacity style={styles.donation} key={donation.id} onPress={ ()=> navigate('WellDescription',
             {well: this.props.allWells.filter(well => well.id == donation.WellId)[0]} )}>
                <Image
                  source={require('../../assets/Coin.png')}
                  style={styles.coin}
                />
                <Text style={styles.donationText}>
                  ${(donation.amount / 100).toFixed(2)}
                </Text>
                <Text style={styles.titleText}>
                  {this.props.allWells.filter(well => well.id == donation.WellId)[0].title.slice(0,20)}...
                </Text>
          </TouchableOpacity>
        ))}

      </View>
     </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  globalErr: state.errors.globalErr,
  userInfo: state.users.userInfo,
  allWells: state.wells.allWells
})

const mapDispatchToProps = (dispatch) => ({
  refreshDonations: () => dispatch(refreshDonations())
})

export default connect(mapStateToProps, mapDispatchToProps)(DonationsPage)
