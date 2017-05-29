/*jshint esversion: 6*/
'use strict';

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wholeContainer: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'space-around'
  },
  progressBarContainer: {
    width: 300,
    height: 20,
    borderWidth: 2,
    borderColor: 'black'
  },
  progressBar: {
    height: 16,
    width: 100,
    backgroundColor: 'purple'
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
    fontSize: 50,
    color: '#84DBEF'
  },
  allText: {
    color: 'oldlace',
    textAlign: 'center'
  },
  icon: {
    width: 22,
    height: 22
  }
});
