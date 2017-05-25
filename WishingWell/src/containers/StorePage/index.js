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

class StorePage extends Component {

  constructor(props) {
      super(props);
        this.state = {
          pan: new Animated.ValueXY()
        };
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
          <Animated.View style={styles.coin}>
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
