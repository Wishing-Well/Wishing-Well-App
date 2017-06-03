import React, {Component} from 'react';
import {
  View,
  Image,
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


  handleDaysLeft = (expiration, creation) => {
    let expirationDate = new Date(expiration)
    let createdDate = new Date(creation)
    let timeDiff = Math.abs(expirationDate.getTime() - createdDate.getTime());
    let daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysLeft
  }


  static navigationOptions = {
    header: null,
    tabBarIcon: () => (
      <Image
        source={require('../../assets/profile.png')}
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

  renderWellInfo = () => {
    const {navigate} = this.props.navigation;
    const {userInfo} = this.props;
    if(this.props.userInfo.Wells.length > 0) {
      const userWell = this.props.allWells.filter(well => well.id == userInfo.Wells.filter(activeWell => activeWell.expired === false)[0].id)[0]
      return (
          <TouchableOpacity onPress={()=>navigate('WellDescription', {well: userWell})}>
          <View style={styles.wellCard}>
            <View style={styles.wellContainer}>
              <View style={styles.wellHeader}>
                <Text style={styles.wellTitle}>
                  {userWell.title.slice(0, 15)}...
                </Text>
                <Text style={styles.daysText}>
                  {`${this.handleDaysLeft(userWell.expiration_date, userWell.createdAt)} days left`}
                </Text>
              </View>
              <Text style={styles.allText}>
                  Funded: ${(userWell.current_amount / 100).toFixed(2)} / ${(userWell.funding_target / 100).toFixed(2)}
              </Text>
              <View style={styles.progressBarContainer}>
                  <View style ={[styles.progressBar, {width: this.getWidth(userWell.current_amount, userWell.funding_target)}]} />
              </View>
            </View>
           </View>
          </TouchableOpacity>
      )
    } else {
      return (
        <TouchableOpacity onPress={()=> navigate("CreateWellPage")}>
          <View style={styles.createWell}>
            <Text style={styles.createWellText}>+ CREATE A WELL</Text>
          </View>
        </TouchableOpacity>
      )
    }
  }

  render() {
    const {navigate} = this.props.navigation;
    const {userInfo} = this.props
    console.log('props',this.props)
    return(
      <View style={styles.wholeContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.pageTitle}>
            Hello {userInfo.full_name}
          </Text>
          <Text style={styles.allText}>
            E-Mail: {userInfo.email}
          </Text>
          <Text style={styles.allText}>
            Donated: ${userInfo.Donations.reduce((prev, curr) => prev + curr.amount, 0) / 100}
          </Text>
        </View>
        {this.renderWellInfo()}
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={()=> navigate("DonationsPage")}>
            <View style={styles.button}>
              <Text style={styles.createWellText}>MY DONATIONS</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.props.logout}>
            <View style={styles.button}>
              <Text style={styles.createWellText}>LOGOUT</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  userInfo: state.users.userInfo,
  globalErr: state.errors.globalErr,
  allWells: state.wells.allWells
})

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
