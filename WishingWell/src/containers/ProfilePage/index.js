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


  handleDaysLeft = () => {
    let expirationDate = new Date(this.props.userInfo.Wells[0].expiration_date)
    let createdDate = new Date(this.props.userInfo.Wells[0].createdAt)
    let timeDiff = Math.abs(this.expirationDate.getTime() - this.createdDate.getTime());
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

  renderWellInfo = () => {
    const {navigate} = this.props.navigation;
    const {userInfo} = this.props;
    if(this.props.userInfo.Wells.length > 0) {
      return (
          <TouchableOpacity onPress={()=>navigate('WellDescription', {well: this.props.allWells.filter(well => well.id == userInfo.Wells[0].id)[0]} )}>
          <View style={styles.wellCard}>
            <View style={styles.wellContainer}>
              <View style={styles.wellHeader}>
                <Text style={styles.wellTitle}>
                  {userInfo.Wells[0].title}
                </Text>
                <Text style={styles.daysText}>
                  {`${5} days left`}
                </Text>
              </View>
              <Text style={styles.allText}>
                  Funded: ${(userInfo.Wells[0].current_amount / 100).toFixed(2)} / ${(userInfo.Wells[0].funding_target / 100).toFixed(2)}
              </Text>
              <View style={styles.progressBarContainer}>
                  <View style ={[styles.progressBar, {width: `${userInfo.Wells[0].current_amount / userInfo.Wells[0].funding_target * 100}%`}]} />
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
        // <View style={styles.wellContainer}>
        //   <TouchableOpacity>
        //     <Text style={styles.allText}>
        //       {'It is free to create a well'}
        //     </Text>
        //     <Text style={styles.allText}>
        //       {'Create a well below'}
        //     </Text>
        //   </TouchableOpacity>
        // </View>
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
