/*jshint esversion: 6*/
'use strict';

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wholePage: {
    flex: 1,
    backgroundColor: '#e5f7fc',
  },
  progressBarContainer: {
    width: 300,
    height: 30,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'rgba(101, 208, 232, 0.3)',
    backgroundColor: '#ccf3ff',
    justifyContent: 'center'
  },
  progressBar: {
    height: 22,
    borderRadius: 5,
    left: '1%',
    right: '1%',
    backgroundColor: 'rgba(19, 193, 112, 0.7)'
  },
});
