/*jshint esversion: 6*/
'use strict';

import {StyleSheet} from 'react-native';



export default StyleSheet.create({
  wholePage: {
    flex: 1,
    backgroundColor: '#001b21'
  },
  textContainer: {

  },
  title: {
    paddingTop: '10%',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 18,
    color: 'rgba(255,255,255,0.7)'
  },
  subtitle: {
    paddingTop: '2%',
    textAlign: 'center',
    fontSize: 13,
    color: 'rgba(255,255,255,0.4)'
  },
  firstRow: {
    paddingTop: '15%',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  secondRow: {
    paddingTop: '10%',
    alignItems: 'center'
  },
  tenDollars: {
    alignItems: 'center'
  },

  fiftyDollars: {
    alignItems: 'center'
  },
  hundredDollars: {
    alignItems: 'center'
  },
  tenPic: {
    width: 120,
    height: 100,
    margin: '5%'
  },
  fiftyPic: {
    width: 120,
    height: 100,
    margin: '5%'
  },
  hundredPic: {
    width: 180,
    height: 180
  },
  coinText: {
    fontWeight: '700',
    fontSize: 18,
    color: 'rgba(242, 199, 27, 0.4)'
  },
  icon: {
    width: 24,
    height: 24
  }

});