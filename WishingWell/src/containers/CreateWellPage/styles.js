/*jshint esversion: 6*/
'use strict';

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#e5f7fc',
  },
  fullPage: {
    backgroundColor: '#e5f7fc',
    padding: 20,
    justifyContent: 'center'
  },
  titleParent: {
    color: "rgba(0, 75, 91, 0.7)",
    fontSize: 16
  },
  fundingText: {
    marginTop: 15,
    color: "rgba(0, 75, 91, 0.7)",
    fontSize: 16,
    textAlign: 'center'
  },
  amountSlider: {
    marginTop: 5
  },
  picker: {
    marginTop: 15
  },
  DescriptionParent: {
    color: "rgba(0, 75, 91, 0.7)",
    fontSize: 16,
    marginTop: -25
  },
  bankParent: {
    marginTop: 15,
    color: "rgba(0, 75, 91, 0.7)",
    fontSize: 16
  },
  icon: {
    width: 22,
    height: 22
  },
  createWell: {
    borderRadius: 5,
    backgroundColor: 'rgba(0,75,91,0.7)',
    width: '80%',
    height: 50,
    marginTop: 10,
    justifyContent: 'center',
    left: '10%'
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 20
  }

});