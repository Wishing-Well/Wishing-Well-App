import React, {Component} from 'react';
import {
  TextInput,
  View
} from 'react-native';
import { connect } from 'react-redux';

class ListPage extends Component {

  static navigationOptions = {
    tapBarLabel: 'List of Wells',
  };

  render() {
    return (
      <View>

      </View>
    );
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(ListPage)
