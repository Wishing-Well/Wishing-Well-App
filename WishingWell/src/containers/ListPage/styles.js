/*jshint esversion: 6*/
'use strict';

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wholeContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#e5f7fc'

  },
  progressBarContainer: {
    width: 300,
    height: 30,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'rgba(101, 208, 232, 0.3)',
    backgroundColor: '#ccf3ff'
  },
  progressBar: {
    height: 16,
    backgroundColor: 'purple'
  },
  titleText : {
    color: '#001b21',
    fontWeight: '700',
    fontSize: 18,
    paddingVertical: 5,
    marginTop: 15
  },
  wellText: {
    color: '#001b21',
    // color: 'rgba(255,255,255,0.5)',
    fontSize: 12,
    paddingVertical: 5
  },
  icon: {
    width: 22,
    height: 22
  }
});
