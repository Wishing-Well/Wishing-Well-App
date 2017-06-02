/*jshint esversion: 6*/
'use strict';

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wholeContainer: {
    flex: 1,
    backgroundColor: '#e5f7fc'
  },
  donation: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  titleText : {
    color: '#004b5b',
    fontWeight: '700',
    fontSize: 18,
    paddingVertical: 5,
    marginTop: 15
  },
  wellText: {
    color: '#004b5b',
    fontSize: 12,
    paddingVertical: 5
  },
  icon: {
    width: 22,
    height: 22
  }
});
