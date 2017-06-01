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

    this.expirationDate = new Date(props.userInfo.Wells[0].expiration_date)
    this.createdDate = new Date(props.userInfo.Wells[0].createdAt)
  }

  handleDaysLeft = () => {
    console.log(this.expirationDate)
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
    console.log('props',this.props)
    console.log(this.expirationDate)
    console.log('days left:',this.handleDaysLeft())
    if(this.props.userInfo.Wells.length > 0) {
      return (
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('WellDescription', {well: this.props.userInfo.Wells[0]})}>
          <View style={styles.wellCard}>
            <View style={styles.wellContainer}>
              <View style={styles.wellHeader}>
                <Text style={styles.wellTitle}>
                  {this.props.userInfo.Wells[0].title}
                </Text>
                <Text style={styles.daysText}>
                  {`${this.handleDaysLeft()} days left`}
                </Text>
              </View>
              <Text style={styles.allText}>
                  Funded: ${(this.props.userInfo.Wells[0].current_amount / 100).toFixed(2)} / ${(this.props.userInfo.Wells[0].funding_target / 100).toFixed(2)}
              </Text>
              <View style={styles.progressBarContainer}>
                  <View style ={[styles.progressBar, {width: `${this.props.userInfo.Wells[0].current_amount / this.props.userInfo.Wells[0].funding_target * 100}%`}]} />
              </View>
            </View>
           </View>
          </TouchableOpacity>
      )
    } else {
      return (
        <View style={styles.wellContainer}>
          <TouchableOpacity>
            <Text style={styles.allText}>
              {'It is free to create a well'}
            </Text>
            <Text style={styles.allText}>
              {'Create a well below'}
            </Text>
          </TouchableOpacity>
        </View>
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
  globalErr: state.errors.globalErr
})

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
