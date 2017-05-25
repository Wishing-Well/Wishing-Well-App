import React, {Component} from 'react';
import {
  TextInput,
  View
} from 'react-native';
import { connect } from 'react-redux';

class GamePage extends Component {
  render() {
    return (
      <View>

      </View>
    );
  }
}

const mapStateToProps = state => ({
  globalErr: state.errors.globalErr
})


const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(GamePage)
