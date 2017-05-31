/*jshint esversion: 6*/
'use strict';

import {StyleSheet} from 'react-native';



export default StyleSheet.create({
  wholeContainer: {
    backgroundColor: '#001b21',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  infoContainer: {
    flex: 3,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  wellContainer: {
    flex: 3,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  buttonContainer: {
    flex: 5,
    justifyContent: 'space-around'
  },
  pageTitle: {
    paddingTop: '10%',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 24,
    color: 'rgba(255,255,255,0.7)'
  },
  allText: {
    paddingTop: '2%',
    textAlign: 'center',
    color: 'rgba(255,255,255,0.4)'
  },
  icon: {
    width: 22,
    height: 22
  }
});
