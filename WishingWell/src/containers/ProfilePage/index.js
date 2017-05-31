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
    console.log(this.props.userInfo)
    if(this.props.userInfo.Wells.length > 0) {
      return (
        <View style={styles.wellContainer}>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('WellDescription', {well: this.props.userInfo.Wells[0]})}>
            <Text style={styles.allText}>
              Your Well
            </Text>
            <Text style={styles.allText}>
              {this.props.userInfo.Wells[0].title}
            </Text>
            <Text style={styles.allText}>
              {this.props.userInfo.Wells[0].description}
            </Text>
          </TouchableOpacity>
        </View>
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
            Account E-Mail: {userInfo.email}
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
