import React, {Component} from 'react';
import {
  Text,
  Image,
  TouchableOpacity,
  View
} from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import {makeCharge} from '../../actions';

class StorePage extends Component {

  static navigationOptions = {
    header: null,
    tabBarIcon: () => (
      <Image
        source={require('../../assets/shop.png')}
        style={styles.icon}
      />
      )
  }

  constructor(props) {
    super(props);
  }



  render() {
    const {navigate} = this.props.navigation;
    return (
        <View style={styles.wholePage}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Buy some coins</Text>
            <Text style={styles.subtitle}>Discover wells around you. Toss them in to donate.</Text>
          </View>
          <View style={styles.firstRow}>
            <TouchableOpacity
              style={styles.tenDollars}
              onPress={()=>navigate('Stripe', {amount: 1000, makeCharge: this.props.makeCharge})}
              >
              <Image
                style={styles.tenPic}
                source={require('../../assets/10_Coin.png')}
              />
              <Text style={styles.coinText}>$3</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.fiftyDollars}
              onPress={()=>navigate('Stripe', {amount: 5000, makeCharge: this.props.makeCharge})}
              >
              <Image
                style={styles.fiftyPic}
                source={require('../../assets/50_Coin.png')}
              />
              <Text style={styles.coinText}>$5</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.secondRow}>
            <TouchableOpacity
              style={styles.hundredDollars}
              onPress={()=>navigate('Stripe', {amount: 10000, makeCharge: this.props.makeCharge})}
              >
              <Image
                style={styles.hundredPic}
                source={require('../../assets/100_Coin.png')}
              />
              <Text style={styles.coinText}>$10</Text>
            </TouchableOpacity>
          </View>
        </View>
    );
  }

}



const mapStateToProps = state => ({
})

const mapDispatchToProps = (dispatch) => ({
  makeCharge: (amount, token) => dispatch(makeCharge(amount, token))
})

export default connect(mapStateToProps, mapDispatchToProps)(StorePage)
