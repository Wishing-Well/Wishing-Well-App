/*jshint esversion: 6*/
import React, { Component } from 'react';
import Mapbox, { MapView, Annotation } from 'react-native-mapbox-gl';
import {
  Text,
  TouchableOpacity,
  Image,
  View,
  StatusBar
} from 'react-native';
import styles from './stylesheet';
import { connect } from 'react-redux';
import { mapkey }from '../../keys';
import {Button} from 'react-native';

Mapbox.setAccessToken(mapkey);

class MapPage extends Component {

  constructor(props) {
      super(props);
        this.state = {
          userTrackingMode: Mapbox.userTrackingMode.follow,
          zoom: 17,
          annotations: [],
        };
    };

  static navigationOptions = {
    header: null,
    tabBarIcon: () => (
      <Image
        source={require('../../assets/map.png')}
        style={styles.icon}
      />
      )
  };

  onRegionWillChange = (location) => {
    if (location.pitch < 60){
      this._map.setPitch(60);
    }
  };

  handleCenter = () => {
    navigator.geolocation.getCurrentPosition( position => {
      this._map.setCenterCoordinate(position.coords.latitude, position.coords.longitude);
    })
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <MapView
          ref={map => { this._map = map; }}
          userTrackingMode={this.state.userTrackingMode}
          compassIsHidden={true}
          rotateEnabled={true}
          pitchEnabled={false}
          scrollEnabled={true}
          style={styles.map}
          zoomEnabled={false}
          showsUserLocation={true}
          initialZoomLevel={this.state.zoom}
          initialDirection={0}
          styleURL={'mapbox://styles/ctsygiel/cj2wllwes001p2rpmb1yup02a'}
          onRegionWillChange={this.onRegionWillChange}
          onOpenAnnotation={(event)=> navigate('WellDescription', {well: this.props.allWells.filter(well => well.id === event.id)[0]})}
          logoIsHidden={true}
          attributionButtonIsHidden={true}
          annotations={this.props.allWells}
        />
        <TouchableOpacity onPress={this.handleCenter} style={styles.locator}>
          <Image
            source={require('../../assets/locator.png')}
            style={styles.locatorImage}
          />
        </TouchableOpacity>

      </View>
    );
  }
}

const mapStateToProps = state => ({
  globalErr: state.errors.globalErr,
  allWells: state.wells.allWells
})

const mapDispatchToProps = (dispatch) => ({
  navigate: routeName => dispatch(navigate(routeName))
})

export default connect(mapStateToProps, mapDispatchToProps)(MapPage)
