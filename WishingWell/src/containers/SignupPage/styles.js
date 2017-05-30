/*jshint esversion: 6*/
'use strict';

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#65D0E8',
    justifyContent: 'flex-end',
  },
  formContainer: {
    padding: 20
  },
  formInput: {
    borderRadius: 5,
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 10,
    color: '#FFF',
    paddingHorizontal: 10
  },
  buttonContainer: {
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#3BA8C1',
    paddingVertical: 10
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '700'
  }
});