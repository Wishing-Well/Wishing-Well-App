import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';

class ListPage extends Component {

  static navigationOptions = {
    header: null,
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        {this.props.allWells.map(well => (
            <TouchableOpacity onPress={()=> navigate('WellPage', {well: well})} key={well.id}>
              <View>
                <Text>
                  {well.title}
                </Text>
                <Text>
                  Collected: {well.current_amount}
                </Text>
                <Text>
                  Target: {well.funding_target}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  globalErr: state.errors.globalErr,
  allWells: state.wells.allWells
})


const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(ListPage)
