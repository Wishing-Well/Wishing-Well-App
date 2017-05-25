/*jshint esversion: 6*/
'use strict';

import {StyleSheet} from 'react-native';



export default StyleSheet.create({
  wellContainer: {
    flex: 1,
    alignItems: 'center',
    top: 10
  },
  well: {
    backgroundColor: '#65D0E8',
    height: 150,
    width: 150,
    borderRadius: 150
  },
  coinContainer: {
    position: 'absolute',
    top: 250
  },
  coin: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor:'#F2C71B'
  }
});