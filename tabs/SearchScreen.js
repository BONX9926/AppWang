import React, { Component } from 'react';
import {
  Platform,
  Text,
  View,
  Button,
  Picker,
  Alert,
  ActivityIndicator
} from 'react-native';
import SelectDrop from '../components/SelectDrop';
import getDirections from 'react-native-google-maps-directions';

export default class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      start_Lat: 13.7500301,
      start_Lng: 100.4890995,
      end_Lat: 13.7500299,
      end_Lng: 100.4825334

    }
  }
  componentDidMount() {
    return fetch('http://nisakorn.com/student/chanika/index.php/api/getwang')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataDrop: responseJson
  
        }, function () {

        });

      })
      .catch((error) => {
        console.error(error);
      });
  }
  handleGetDirections = () => {
    let data = {
      source: {
        latitude: Number(this.state.start_Lat),
        longitude: Number(this.state.start_Lng)
      },
      destination: {
        latitude: Number(this.state.end_Lat),
        longitude: Number(this.state.end_Lng)
      },
      params: [
        {
          key: "travelmode",
          value: "driving"        // may be "walking", "bicycling" or "transit" as well
        }
      ]
    }
    console.warn('aaaa', data);

    getDirections(data)
  }
  render() {

    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator size="large" />
        </View>
      )
    }
    return (
      <View style={{ padding: 8 }}>
        <View style={{ padding: 8 }}>
          <Text>Start:</Text>
          <Text>{this.state.start_Lat + ',' + this.state.start_Lng}</Text>
          <Picker
            selectedValue={this.state.start_Lat + ',' + this.state.start_Lng}
            mode="dialog"
            style={{ height: 50, width: 'auto' }}
            onValueChange={(itemValue, itemIndex) => {
              let res = itemValue.split(",");
              this.setState({ start_Lat: res[0], start_Lng: res[1] })
            }}>
            {
              this.state.dataDrop.map((drop, index) => {
                return (
                  <Picker.Item key={index} label={drop.title} value={drop.lat + ',' + drop.lng} />
                )
              })
            }
          </Picker>
        </View>
        <View style={{ padding: 8 }}>
          <Text>End:</Text>
          <Text>{this.state.end_Lat + ',' + this.state.end_Lng}</Text>
          <Picker
            selectedValue={this.state.end_Lat + ',' + this.state.end_Lng}
            mode="dialog"
            style={{ height: 50, width: 'auto' }}
            onValueChange={(itemValue, itemIndex) => {
              let res = itemValue.split(",");
              this.setState({ end_Lat: res[0], end_Lng: res[1] })

            }}>
            {
              this.state.dataDrop.map((drop, index) => {
                return (
                  <Picker.Item key={index} label={drop.title} value={drop.lat + ',' + drop.lng} />
                )
              })
            }
          </Picker>
        </View>
        <Button onPress={this.handleGetDirections} title="Get Directions" />
      </View>
    );
  }
}

