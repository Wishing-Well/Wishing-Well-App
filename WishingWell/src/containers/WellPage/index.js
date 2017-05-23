import React, {Component} from 'react';
import {
  TextInput,
  View
} from 'react-native';
import { connect } from 'react-redux';

class WellPage extends Component {
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
  navigate: routeName => dispatch(navigate(routeName))
})

export default connect(mapStateToProps, mapDispatchToProps)(WellPage)
