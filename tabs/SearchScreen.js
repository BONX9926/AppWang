import React, { Component } from 'react';
import {
  Platform,
  Text,
  View,
  Button
} from 'react-native';
import SelectDrop from '../components/SelectDrop';
import getDirections from 'react-native-google-maps-directions';

export default class SearchScreen extends Component {
   
  handleGetDirections = () => {
    const data = {
       source: {
        latitude: 13.786269,
        longitude: 100.569242
      },
      destination: {
        latitude: 13.785019,
        longitude: 100.563963
      },
      params: [
        {
          key: "travelmode",
          value: "driving"        // may be "walking", "bicycling" or "transit" as well
        }
      ]
    }
 
    getDirections(data)
  }
  render() {
    return (
      <View>
        <SelectDrop />
        <Button onPress={this.handleGetDirections} title="Get Directions" />
      </View>
    );
  }
}

