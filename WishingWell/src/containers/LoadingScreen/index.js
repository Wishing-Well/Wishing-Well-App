import React, {Component} from 'react';
import {
  View,
  Animated,
  Image
} from 'react-native';
import styles from './styles';

class LoadingScreen extends Component{
  constructor(props) {
    super(props);
    this.state = {
      spin: new Animated.Value(0)
    };
  }

  componentDidMount() {
    Animated.timing(this.state.spin, {
        toValue: 100,
        duration: 3000
    }).start();
  }

  render() {
    const spin = this.state.spin.interpolate({
      inputRange: [0, 100],
      outputRange: ['0deg', '360deg']
    });

    return (
      <View style={styles.page}>
       <Animated.Image
            style={[styles.coin, {transform:[{rotate:spin}]}]}
            source={require('../../assets/Coin.png')}
          />
      </View>
    );
  }
};

export default LoadingScreen;