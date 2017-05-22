
import React, { Component } from 'react';
import Mapbox, { MapView } from 'react-native-mapbox-gl';
import {
  Text,
  StatusBar,
  View,
  ScrollView
} from 'react-native';
import styles from './stylesheet';
import { connect } from 'react-redux';
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
          userTrackingMode={this.state.userTrackingMode}
          ref={map => { this._map = map; }}
          style={styles.map}
          scrollEnabled={false}
          zoomEnabled={false}
          showsUserLocation={true}
          initialZoomLevel={this.state.zoom}
          initialDirection={0}
          styleURL={'mapbox://styles/ctsygiel/cj2wllwes001p2rpmb1yup02a'}
          onRegionWillChange={this.onRegionWillChange}
          logoIsHidden={true}
          attributionButtonIsHidden={true}
        />
      </View>
    );
  }
}

/*class MapPage extends Component {
  render() {
    return (
      <View>
        <MapView />
      </View>
    )
  }
}*/

export default MapPage;