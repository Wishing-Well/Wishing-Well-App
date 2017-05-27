/*jshint esversion: 6*/
import React, { Component } from 'react';
import Mapbox, { MapView, Annotation } from 'react-native-mapbox-gl';
import {
  Text,
  View,
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
          rotate: 0
        };
    };

  static navigationOptions = {
    header: null,
  };

  onRegionWillChange = (location) => {
    if (location.pitch < 60){
      this._map.setPitch(60);
    }
  };

  handleCenter = () => {
    console.log('hereee')
    navigator.geolocation.getCurrentPosition( position => {
      this._map.setCenterCoordinate(position.coords.latitude, position.coords.longitude);
      console.log('thereee')
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
          onOpenAnnotation={()=> navigate('WellPage', {well: this.props.allWells[0]})}
          logoIsHidden={true}
          attributionButtonIsHidden={true}
          annotations={this.props.allWells}
        />
        <Button
        title="Center"
        onPress={this.handleCenter}
        style={{alignItems: 'center', justifyContent: 'center', position: 'absolute'}}
        />

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
