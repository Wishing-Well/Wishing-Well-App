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
    return (
      <View>
        {this.props.allWells.map(well => (
            <TouchableOpacity onPress={this._onPressButton} key={well.id}>
              <View>
                <Text>
                  {well.title}
                </Text>
                <Text>
                  {well.description}
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
