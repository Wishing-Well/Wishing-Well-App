/*jshint esversion: 6*/
'use strict';

import {StyleSheet} from 'react-native';



export default StyleSheet.create({
  wholePage: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#2B2B2B',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 1
  },
  title: {
    flex: 2,
    fontSize: 50,
    color: '#84DBEF'
  },
  subtitle: {
    flex: 1,
    fontSize: 20,
    color: '#84DBEF'
  },
  firstRow: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  secondRow: {
    flex: 2
  },
  tenDollars: {
    width: 125,
    height: 125,
    alignItems: 'center',
    justifyContent: 'center'
  },
  fiftyDollars: {
    flex: 1,
    width: 125,
    height: 125,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tenPic: {
    width: 125,
    height: 125
  },
  fiftyPic: {
    width: 125,
    height: 125
  },
  hundredPic: {
    width: 180,
    height: 180
  }

});