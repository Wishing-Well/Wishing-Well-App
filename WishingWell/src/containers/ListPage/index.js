import React, {Component} from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import { connect } from 'react-redux';
import  styles  from './styles';

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
      <StatusBar backgroundColor="#004b5b"/>
        {this.props.allWells.map(well => (
            <TouchableOpacity onPress={()=> navigate('WellDescription', {well: well})} key={well.id}>
              <View>
                <Text style={styles.titleText}>
                  {well.title}
                </Text>
                <Text style={styles.wellText}>
                  Funded: ${(well.current_amount / 100).toFixed(2)} / ${(well.funding_target / 100).toFixed(2)}
                </Text>
                <View style={styles.progressBarContainer}>
                  <View style ={[styles.progressBar, {width: `${well.current_amount / well.funding_target * 100}%`}]} />
                </View>
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
