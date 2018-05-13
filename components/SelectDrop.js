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
  Picker
} from 'react-native';

export default class SelectDrop extends Component {
  constructor(props) {
    super(props);
    this.state = {language: 'java' }
  }
  render() {
    return (
      <Picker
        selectedValue={this.state.language}
        mode="dropdown"
        style={{ height: 50, width: 100 }}
        onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    );
  }
}
