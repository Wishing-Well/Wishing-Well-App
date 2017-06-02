import React, {Component} from 'react';
import {Animated, View, Image, Easing} from 'react-native';

class LoadingScreen extends Component{
  constructor(props) {
    super(props);
    this.state = {
      spin: new Animated.Value(0)
    }
  }

  componentDidMount() {
    this.runAnimation()
  }

  runAnimation() {
    this.state.spin.setValue(0);
    Animated.timing(
      this.state.spin,
      {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear
      }
    ).start(() => this.runAnimation())
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#65D0E8'}}>
        <Animated.Image
          style={
            {
              transform: [{rotate: this.state.spin.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '360deg']
              })}],
              height: 150,
              width: 150
            }
          }
          source={require('../../assets/Coin.png')} />
      </View>
    )
  }
}


export default LoadingScreen