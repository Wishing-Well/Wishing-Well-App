/*jshint esversion: 6*/
'use strict';

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1
  },
  scrollView: {
    flex: 1
  },
  listContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  listView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 40,
    borderColor: '#65D0E8',
    backgroundColor: '#65D0E8',
    position: 'absolute',
    bottom: 20

  },
  listViewText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white'
  },
  profileContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  profileButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 40,
    borderColor: '#65D0E8',
    backgroundColor: '#65D0E8',
    position: 'absolute',
    bottom: 80

  },
  profileButtonText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white'
  }
});