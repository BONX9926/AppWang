/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';


export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Main</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(32, 50, 70)',
  },
  logo: {
    width: 128,
    height: 50
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white'
  }
});
