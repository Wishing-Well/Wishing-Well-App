/*jshint esversion: 6*/
'use strict';

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wholePage: {
    flex: 1,
    backgroundColor: '#e5f7fc',
    alignItems: 'center'
  },
  wellAmounts: {
    width: '80%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: 10
  },
  wellCurrent: {
    width: '40%'
  },
  wellTarget: {
    width: '40%'
  },
  descTitle: {
    textDecorationLine: 'underline',
    fontSize: 25,
    color: '#004B5B'
  },
  wellDesc: {
    width: '80%',
    lineHeight: 23,
    marginBottom: 30
  },
  progressBarContainer: {
    width: 300,
    height: 30,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'rgba(101, 208, 232, 0.3)',
    backgroundColor: '#ccf3ff',
    justifyContent: 'center',
    marginBottom: 10
  },
  progressBar: {
    height: 22,
    borderRadius: 5,
    left: '1%',
    right: '1%',
    backgroundColor: 'rgba(19, 193, 112, 0.7)'
  },
  submitButton: {
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: 'rgba(19, 193, 112, 0.7)',
    paddingVertical: 10,
    width: '80%',
    height: 50,
    justifyContent: 'center'
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 20
  }
});
