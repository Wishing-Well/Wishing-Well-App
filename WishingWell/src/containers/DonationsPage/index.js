import React, {Component} from 'react';
import {
  TextInput,
  View
} from 'react-native';
import { connect } from 'react-redux';
import {refreshDonations} from '../../actions';

class DonationsPage extends Component {
  render() {
    return (
      <View>

      </View>
    );
  }
}

const mapStateToProps = state => ({
  globalErr: state.errors.globalErr,
  user_donations: state.wells.user_donations
})

const mapDispatchToProps = (dispatch) => ({
  refreshDonations: () => dispatch(refreshDonations())
})

export default connect(mapStateToProps, mapDispatchToProps)(DonationsPage)
