import React, { Component } from 'react';
import {
  Platform,
  Text,
  View,
} from 'react-native';
import SelectDrop from '../components/SelectDrop';
export default class SearchScreen extends Component {
  render() {
    return (
      <View>
        <SelectDrop />
      </View>
    );
  }
}

