/*jshint esversion: 6*/
'use strict';

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  masterPage: {
    backgroundColor: '#e5f7fc'
  },
  wholePage: {
    flex: 1,
    backgroundColor: '#e5f7fc',
    alignItems: 'center'
  },
  wellAmounts: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wellCurrent: {
    paddingRight: '5%',
    color: 'rgba(0,75,91,0.7)'
  },
  wellTarget: {
    paddingLeft: '5%',
    color: 'rgba(0,75,91,0.7)'
  },
  descTitle: {
    marginTop: 20,
    fontWeight: '700',
    fontSize: 20,
    color: 'rgba(0,75,91,0.7)'
  },
  wellDesc: {
    width: '80%',
    lineHeight: 23,
    marginBottom: 30,
    color: 'rgba(0,75,91,0.7)'
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
    backgroundColor: 'rgba(0,75,91,0.7)',
    paddingVertical: 10,
    width: '80%',
    height: 50,
    justifyContent: 'center'
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 20
  },
  eachMessage: {
    color: 'rgba(0,75,91,0.7)',
    fontWeight: '500',
    width: '80%',
    lineHeight: 23,
    fontSize: 16
  },
  messageContainer: {
    width: '80%'
  },
  messageUser: {
    marginTop: 10,
    color: 'rgba(0,75,91,0.4)'
  },
  messageDate: {
    color: 'rgba(0,75,91,0.4)'
  },
  messagesTitle: {
    marginTop: 20,
    fontWeight: '700',
    fontSize: 20,
    color: 'rgba(0,75,91,0.7)'
  },
  icon: {
    height: 22,
    width: 22
  }
});
