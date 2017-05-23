import React, {Component} from 'react';
import {
  TextInput,
  View
} from 'react-native';
import { connect } from 'react-redux';
import {navigate} from '../../actions';

class ListPage extends Component {

  static navigationOptions = {
    tapBarLabel: 'List of Wells',
  };

  render() {
    if (!this.props.loggedIn) {this.props.navigate('InitialPage')}
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

export default connect(mapStateToProps, mapDispatchToProps)(ListPage)
