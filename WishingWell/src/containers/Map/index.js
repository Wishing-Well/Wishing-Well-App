
import React, { Component } from 'react';
import Mapbox, { MapView, Annotation } from 'react-native-mapbox-gl';
import {
  Text,
  StatusBar,
  View,
  TouchableNativeFeedback
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
          zoom: 17,
          annotations: []
        };
    };

    dropWell = () => {
      this._map.getCenterCoordinateZoomLevel(data => {
        this.setState({
          annotations: [ ...this.state.annotations, {
            coordinates: [data.latitude, data.longitude],
            type: 'point',
            title: 'This is your new well',
            id: 'foo'
          }]
      });
    });
  };


  onRegionWillChange = (location) => {
    if (location.pitch < 60){
      this._map.setPitch(60);
    }
  };

  render() {
    StatusBar.setHidden(true);
    const {navigate} = this.props.navigation;
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
          annotations={this.state.annotations}
        />
          <View style={styles.listContainer}>
            <TouchableNativeFeedback
                onPress={()=>navigate('ListPage')}
                background={TouchableNativeFeedback.Ripple('red')}>
                  <View style={styles.listView}>
                  <Text style={styles.listViewText}>List</Text>
                </View>
            </TouchableNativeFeedback>
          </View>

          <View style={styles.profileContainer}>
            <TouchableNativeFeedback
                onPress={()=>navigate('ProfilePage')}
                background={TouchableNativeFeedback.Ripple('red')}>
                  <View style={styles.profileButton}>
                  <Text style={styles.profileButtonText}>Profile</Text>
                </View>
            </TouchableNativeFeedback>
          </View>

          <View style={styles.dropContainer}>
            <TouchableNativeFeedback
                onPress={this.dropWell}
                background={TouchableNativeFeedback.Ripple('red')}>
                  <View style={styles.dropButton}>
                  <Text style={styles.dropButtonText}>Drop a Well</Text>
                </View>
            </TouchableNativeFeedback>
          </View>

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
