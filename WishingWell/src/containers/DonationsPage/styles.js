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
    left: '4%',
    justifyContent: 'flex-start'
  },
  titleText : {
    color: '#004b5b',
    fontWeight: '700',
    paddingLeft: '5%',
    fontSize: 18,
    paddingVertical: 15,
    marginTop: 15
  },
  donationText: {
    color: 'rgba(19, 193, 112, 0.7)',
    fontWeight: '700',
    paddingLeft: '5%',
    fontSize: 18,
    paddingVertical: 15,
    marginTop: 15
  },
  wellText: {
    color: '#004b5b',
    fontSize: 12,
    paddingVertical: 5
  },
  coin: {
    top: '6%',
    width: 40,
    height: 40
  },
  icon: {
    width: 22,
    height: 22
  },
  scrollView: {
    backgroundColor: '#e5f7fc'
  }
});
