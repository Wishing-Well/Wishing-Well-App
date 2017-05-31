/*jshint esversion: 6*/
import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { connect } from 'react-redux';
import {dropCoin, resetCoin} from '../../actions/GameActions';

class GameCoin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interval: null
    };
  }

  handleCoin = () => {
    console.log('heyyyyyyyyyyy');
    let interval = setInterval(this.update, 100);
    this.setState({interval});
  };
  update= () => {
    this.animate();
  };

  componentWillUnmount() {
    this.clearInterval(this.state.interval);
  }

  animate = () => {
    console.log(this.props)
    if(this.props.droppedCoin < 5) {
      this.props.resetCoin();
      clearInterval(this.interval);
      return;
    }
    console.log('heree');
    this.props.dropCoin();
  };

  render() {
    const styles = StyleSheet.create({
      coinDrop: {
        left: 10,
        bottom: this.props.droppedCoin
      },
      coin: {
        width: 25,
        height: 25
      }
    });

    return (
      <TouchableOpacity onPress={this.handleCoin} style={styles.coinDrop}>
        <Image
          style={styles.coin}
          source={require('../../assets/Coin.png')}
          />
      </TouchableOpacity>

    );
  }
}

const mapStateToProps = state => ({
  globalErr: state.errors.globalErr,
  droppedCoin: state.game.droppedCoin
});


const mapDispatchToProps = (dispatch) => ({
  dropCoin: () => dispatch(dropCoin()),
  resetCoin: () => dispatch(resetCoin())
});

export default connect(mapStateToProps, mapDispatchToProps)(GameCoin);