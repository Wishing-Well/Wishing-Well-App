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

  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    header: null
  };



  render() {
    const {navigate} = this.props.navigation;
    return (
        <View style={styles.wholePage}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Wellit Shop</Text>
            <Text style={styles.subtitle}>Buy Your Tokens</Text>
          </View>
          <View style={styles.firstRow}>
            <TouchableOpacity
              style={styles.tenDollars}
              onPress={()=>navigate('Stripe', {amount: 1000, makeCharge: this.props.makeCharge})}
              >
              <Image
                style={styles.tenPic}
                source={require('../../assets/ten_coin.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.fiftyDollars}
              onPress={()=>navigate('Stripe', {amount: 5000, makeCharge: this.props.makeCharge})}
              >
              <Image
                style={styles.fiftyPic}
                source={require('../../assets/fifty_coin.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.secondRow}>
            <TouchableOpacity
              style={styles.hundredDollars}
              onPress={()=>navigate('Stripe', {amount: 10000, makeCharge: this.props.makeCharge})}
              >
              <Image
                style={styles.hundredPic}
                source={require('../../assets/hundred_coin.png')}
              />
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
