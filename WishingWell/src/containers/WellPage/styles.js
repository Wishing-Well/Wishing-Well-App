/*jshint esversion: 6*/
'use strict';

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  fullPage: {
    flex: 1,
    backgroundColor: '#e5f7fc',
  },
  firstStep: {
    backgroundColor: 'blue',
    flex: 1,
    justifyContent: 'space-around'
  },
  secondStep: {
    backgroundColor: 'green',
    flex: 1
  },
  thirdStep: {
    backgroundColor: 'yellow',
    flex: 1
  },
  field: {
    width: 300,
    color: '#449aeb',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
  }
});
