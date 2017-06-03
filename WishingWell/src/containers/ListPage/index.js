import React, {Component} from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  StatusBar,
  ScrollView
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
  getWidth(current, target) {
    let width = current / target;
    if (width > 1) {
      width = 0.98
    }
    return `${width * 100}%`
  }

  titleBreak(well) {
    if (well.title.length < 29) {
      return well.title
    } else {
      return `${well.title.slice(0,25)}...`
    }
  }

  render() {
    const {navigate} = this.props.navigation;
    console.log('allwells',this.props.allWells)
    return (
      <ScrollView style={{backgroundColor: '#e5f7fc'}}>
        <View style={styles.wholeContainer}>
        <StatusBar backgroundColor="#004b5b"/>
          {this.props.allWells.map(well => (
              <TouchableOpacity onPress={()=> navigate('WellDescription', {well: well})} key={well.id}>
                <View>
                  <Text style={styles.titleText}>
                    {this.titleBreak(well)}
                  </Text>
                  <Text style={styles.wellText}>
                    Funded: ${(well.current_amount / 100).toFixed(2)} / ${(well.funding_target / 100).toFixed(2)}
                  </Text>
                  <View style={styles.progressBarContainer}>
                    <View style ={[styles.progressBar, {width: this.getWidth(well.current_amount, well.funding_target)}]} />
                  </View>
                </View>
              </TouchableOpacity>
            ))}
        </View>
      </ScrollView>
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
