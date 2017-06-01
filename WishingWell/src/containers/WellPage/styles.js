/*jshint esversion: 6*/
'use strict';

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  fullPage: {
    flex: 1,
    backgroundColor: '#e5f7fc',
  },
  firstStep: {
    backgroundColor: '#e6f9ff',
    borderColor: '#65D0E8',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: '2%',
    marginRight: '2%'
  },
  amountText: {
    textAlign: 'center',
    width: '100%',
    fontSize: 20
  },
  amountSlider: {
    width: '80%',
  },
  secondStep: {
    backgroundColor: 'green',
    flex: 1
  },
  messageInput: {
    width: '80%'
  },
  thirdStep: {
    backgroundColor: 'yellow',
    flex: 1
  },
  field: {
    width: 300,
    color: '#65D0E8',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
  }
});
