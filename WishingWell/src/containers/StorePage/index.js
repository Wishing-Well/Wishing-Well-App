import React, {Component} from 'react';
import {
  Animated,
  Dimentsions,
  PanResponder,
  TextInput,
  View
} from 'react-native';
import { connect } from 'react-redux';
import styles from './stylesheet';
import clamp from 'clamp';

let SWIPE_THRESHOLD = 120;

class StorePage extends Component {

  constructor(props) {
      super(props);
        this.state = {
          pan: new Animated.ValueXY()
        };

        this.panResponder = PanResponder.create({
          onMoveShouldSetResponderCapture: () => true,
          onMoveShouldSetPanResponderCapture: () => true,

          onStartShouldSetPanResponder: () => true,

          onPanResponderGrant: (e, gestureState) => {
            this.state.pan.setOffset({x: this.state.pan.x._value, y: this.state.pan.y._value});
            this.state.pan.setValue({x: 0, y: 0});
          },

          onPanResponderMove: Animated.event([null, {
            dx: this.state.pan.x,
            dy: this.state.pan.y
          }]),

          onPanResponderRelease: (e, {vx, vy}) => {
            this.state.pan.flattenOffset();
            let velocity;

            if (vy >= 0){
              velocity = clamp(vx, 3, 5);
            } else if (vy < 0){
              velocity = clamp(vy * -1,3 ,5) * -1;
            }

            if (Math.abs(this.state.pan.y._value) > SWIPE_THRESHOLD) {
              Animated.decay(this.state.pan, {
                velocity: {x: vx, y: velocity},
                deceleration: 0.98
              }).start(this._resetState)
            } else {
              Animated.spring(this.state.pan, {
                toValue: {x: 0, y: 0},
                friction: 4
              }).start()
            }
          }
        })
      };


  render() {
    return (
        <View style={styles.wellContainer}>
          <View style={styles.well}>
          </View>

          {this.renderCoin()}
        </View>
    );
  }

  renderCoin(){
    return (
      <View style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
        <View style={styles.coinContainer}>
          <Animated.View
            {...this.panResponder.panHandlers}
            style={[this.state.pan.getLayout(), styles.coin]}>
          </Animated.View>
        </View>
      </View>
      );
  }

}



const mapStateToProps = state => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(StorePage)
