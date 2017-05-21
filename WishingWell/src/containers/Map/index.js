 /*jshint esversion: 6*/
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

/*class MapPage extends Component {

constructor(props) {
    super(props);
      this.state = {
          zoom: 19,
          userTrackingMode: Mapbox.userTrackingMode.follow
        };

  }

  onRegionWillChange = (location) => {
    console.log('onRegionWillChange', location);
    console.log(location.pitch)
    if (location.pitch < 60){
      this._map.setPitch(60);
    }
  };
  onChangeUserTrackingMode = (userTrackingMode) => {
    this.setState({ userTrackingMode });
    console.log('onChangeUserTrackingMode', userTrackingMode);
  };

  componentWillMount() {
    this._offlineProgressSubscription = Mapbox.addOfflinePackProgressListener(progress => {
      console.log('offline pack progress', progress);
    });
    this._offlineMaxTilesSubscription = Mapbox.addOfflineMaxAllowedTilesListener(tiles => {
      console.log('offline max allowed tiles', tiles);
    });
    this._offlineErrorSubscription = Mapbox.addOfflineErrorListener(error => {
      console.log('offline error', error);
    });
  }

  componentWillUnmount() {
    this._offlineProgressSubscription.remove();
    this._offlineMaxTilesSubscription.remove();
    this._offlineErrorSubscription.remove();
  }


  render() {
    StatusBar.setHidden(true);
    return (
      <View style={styles.container}>
        <MapView
          ref={map => { this._map = map; }}
          style={styles.map}
          pitch={this.state.pitch}
          initialZoomLevel={this.state.zoom}
          initialDirection={0}
          showsUserLocation={true}
          styleURL={'mapbox://styles/ctsygiel/cj2wllwes001p2rpmb1yup02a'}
          userTrackingMode={this.state.userTrackingMode}
          onChangeUserTrackingMode={this.onChangeUserTrackingMode}
          onRegionWillChange={this.onRegionWillChange}
          logoIsHidden={true}
        />
      </View>
    );
  }
}*/

class MapPage extends Component {
  render() {
    return (
      <View>
        <MapView />
      </View>
    )
  }
}

export default MapPage;