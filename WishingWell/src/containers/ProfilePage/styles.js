/*jshint esversion: 6*/
'use strict';

import {StyleSheet} from 'react-native';



export default StyleSheet.create({
  wholeContainer: {
    backgroundColor: '#e5f7fc',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  infoContainer: {
    flex: 3,
    alignItems: 'center'
  },
  wellCard: {
    width: 300,
    height: 150,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'rgb(255,255,255)',
    borderColor: 'rgba(101, 208, 232, 0.3)'
  },
  wellContainer: {
    flex: 3,
    alignItems: 'center'
  },
  buttonContainer: {
    flex: 5,
    justifyContent: 'space-around'
  },
  daysText: {
    paddingTop: '5%',
    paddingRight: '6%',
    color: 'rgba(0,75,91,0.4)',
    fontSize: 12
  },
  pageTitle: {
    paddingTop: '10%',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 24,
    color: 'rgba(0,75,91,0.7)'
  },
  progressBarContainer: {
    top: '5%',
    width: 265,
    height: 30,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'rgba(101, 208, 232, 0.3)',
    backgroundColor: '#ccf3ff',
    justifyContent: 'center'
  },
  createWell: {
    width: 200,
    height: 100,
    borderRadius: 5,
    backgroundColor: 'rgba(19, 193, 112, 0.7)',
    justifyContent: 'center'
  },
  createWellText: {
    fontWeight: '700',
    color: 'rgba(255,255,255,0.8)',
    textAlign: 'center'
  },
  button: {
    width: 150,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,75,91,0.7)'
  },
  progressBar: {
    height: 22,
    borderRadius: 5,
    left: '1%',
    paddingRight: '1%',
    backgroundColor: 'rgba(19, 193, 112, 0.7)'
  },
  wellHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingBottom: '4%',
  },
  wellTitle: {
    paddingLeft: '6%',
    paddingTop: '4%',
    fontWeight: '700',
    fontSize: 18,
    color: 'rgba(0,75,91,0.7)'
  },
  allText: {
    paddingTop: '2%',
    textAlign: 'center',
    color: 'rgba(0,75,91,0.4)'
  },
  icon: {
    width: 22,
    height: 22
  }
});
