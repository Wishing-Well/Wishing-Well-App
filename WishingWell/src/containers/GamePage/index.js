import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import GameCoin from '../GameCoin';

class GamePage extends Component {

  render() {
    const styles = StyleSheet.create({
      wrapper: {
          position: 'absolute',
          flex: 1,
          left: 0,
          bottom: 0,
          flexDirection: 'row'
      },
  });
    return (
      <View style={styles.wrapper}>
        <GameCoin />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  globalErr: state.errors.globalErr
});


const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);

