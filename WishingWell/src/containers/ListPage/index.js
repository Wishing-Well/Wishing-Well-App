import React, {Component} from 'react';
import {
  TextInput,
  View
} from 'react-native';
import { connect } from 'react-redux';
import {navigate} from '../../actions';

class ListPage extends Component {
  render() {
    return (
      <View>

      </View>
    );
  }
}

const mapStateToProps = state => ({
  userInfo: state.users.userInfo
})

const mapDispatchToProps = (dispatch) => ({
  navigate: routeName => dispatch(navigate(routeName))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListPage)
