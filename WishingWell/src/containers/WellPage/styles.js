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
    margin: '2%',
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
    backgroundColor: '#e6f9ff',
    borderColor: '#65D0E8',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: '2%',
  },
  messageInput: {
    width: '90%'
  },
  thirdStep: {
    backgroundColor: '#e6f9ff',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: '2%',
  },
  submitButton: {
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: 'rgba(19, 193, 112, 0.7)',
    paddingVertical: 10,
    width: '100%',
    height: 100,
    justifyContent: 'center'
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 30
  },
  field: {
    width: 300,
    color: '#65D0E8',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
  },
  icon: {
    width: 22,
    height: 22
  }
});
