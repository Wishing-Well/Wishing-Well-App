
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
        userTrackingMode: Mapbox.userTrackingMode.follow, // <-------- DOCS had it like this but not really working
        zoom: 20
      };
  };

  //MAP WORKS BUT IT IS NOT INITIALLY STARTING AT USER'S LOCATION WHICH IS KEY TO OUR APP... NEEDA FIGURE IT OUT...

  onRegionWillChange = (location) => {
    if (location.pitch < 60){
      this._map.setPitch(60);
      console.log(location)
    }
  };



  render() {
    StatusBar.setHidden(true);
    return (
      <View style={styles.container}>
        <MapView
          ref={map => { this._map = map; }}
          style={styles.map}
          initialZoomLevel={this.state.zoom}
          initialDirection={0}
          showsUserLocation={true}
          styleURL={'mapbox://styles/ctsygiel/cj2wllwes001p2rpmb1yup02a'}
          onRegionWillChange={this.onRegionWillChange}
          logoIsHidden={true}
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