
import React, { Component } from 'react';
import Mapbox, { MapView, Annotation } from 'react-native-mapbox-gl';
import {
  Text,
  View,
  TouchableNativeFeedback
} from 'react-native';
import styles from './stylesheet';
import { connect } from 'react-redux';
import { mapkey }from '../../keys';

const wells = [
  {
    id: 'cogan',
    coordinates: [
      21.3087,
      -157.809
    ],
    type: 'point',
    annotationImage: {
      source: { uri: 'well' },
      height: 50,
      width: 50
    }
  },
  {
    id: 'gan',
    coordinates: [
      21.3187,
      -157.8109
    ],
    type: 'point',
    annotationImage: {
      source: { uri: 'well' },
      height: 50,
      width: 50
    }
  },
  {
    id: 'coganad',
    coordinates: [
      21.3287,
      -157.8209
    ],
    type: 'point',
    annotationImage: {
      source: { uri: 'well' },
      height: 50,
      width: 50
    }
  },
  {
    id: 'godi',
    coordinates: [
      21.3087,
      -157.810
    ],
    type: 'point',
    annotationImage: {
      source: { uri: 'well' },
      height: 50,
      width: 50
    }
  }
]


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
            id: 'foo',
            annotationImage: {
              source: { uri: 'well' },
              height: 50,
              width: 50
            }
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
          onOpenAnnotation={() => console.log('hey')}
          logoIsHidden={true}
          attributionButtonIsHidden={true}
          annotations={wells}
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