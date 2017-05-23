
import React, { Component } from 'react';
import Mapbox, { MapView } from 'react-native-mapbox-gl';
import {
  Text,
  StatusBar,
  View,
  ScrollView,
  Button
} from 'react-native';
import styles from './stylesheet';
import { connect } from 'react-redux';
import {navigate} from '../../actions';
import { mapkey }from '../../keys';


Mapbox.setAccessToken(mapkey);

class MapPage extends Component {

constructor(props) {
    super(props);
    console.log(props);
      this.state = {
        userTrackingMode: Mapbox.userTrackingMode.follow,
        zoom: 17
      };
  };

  onRegionWillChange = (location) => {
    if (location.pitch < 60){
      this._map.setPitch(60);
    }
  };

  render() {
    StatusBar.setHidden(true);
    return (
      <View style={styles.container}>
        <MapView
          ref={map => { this._map = map; }}
          userTrackingMode={this.state.userTrackingMode}
          compassIsHidden={true}
          rotateEnabled={false}
          pitchEnabled={false}
          scrollEnabled={false}
          style={styles.map}
          zoomEnabled={false}
          showsUserLocation={true}
          initialZoomLevel={this.state.zoom}
          initialDirection={0}
          styleURL={'mapbox://styles/ctsygiel/cj2wllwes001p2rpmb1yup02a'}
          onRegionWillChange={this.onRegionWillChange}
          logoIsHidden={true}
          attributionButtonIsHidden={true}
        />
        <Button style={styles.listView}
          title = 'List'
          onPress = {()=>{this.props.navigate('ListPage')}}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = (dispatch) => ({
  navigate: routeName => dispatch(navigate(routeName))
})

export default connect(mapStateToProps, mapDispatchToProps)(MapPage)
