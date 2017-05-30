import React, {Component} from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import  styles  from './styles';

let width = 300;

class ListPage extends Component {

  static navigationOptions = {
    header: null,
    tabBarIcon: () => (
      <Image
        source={require('../../assets/list.png')}
        style={styles.icon}
      />
      )
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.wholeContainer}>
        {this.props.allWells.map(well => (
            <TouchableOpacity onPress={()=> navigate('WellPage', {well: well})} key={well.id}>
              <View>
                <View style={styles.progressBarContainer}>
                  <View style ={[styles.progressBar, {width: `${well.current_amount / well.funding_target * 100}%`}]} />
                </View>
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
