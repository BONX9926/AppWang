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

    }
  }
  componentDidMount() {
    return fetch('http://nisakorn.com/student/chanika/index.php/api/getwang')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataDrop: responseJson,
          startLat: 13.75003010,
          startLng: 100.48909950,
          endLat: 13.75002990,
          endLng: 100.48253340,
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
        latitude: this.state.startLat,
        longitude: this.state.startLng
      },
      destination: {
        latitude: this.state.endLat,
        longitude: this.state.endLng
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
          <Text>{this.state.startLat + ',' + this.state.startLng}</Text>
          <Picker
            selectedValue={this.state.startLat + ',' + this.state.startLng}
            mode="dialog"
            style={{ height: 50, width: 'auto' }}
            onValueChange={(itemValue1, itemIndex) => {
              let res1 = itemValue1.split(",");
              this.setState({ startLat: res1[0], startLng: res1[1] })
            }}>
            {
              this.state.dataDrop.map((drop1, index) => {
                return (
                  <Picker.Item key={index} label={drop1.title} value={drop1.lat + ',' + drop1.lng} />
                )
              })
            }
          </Picker>
        </View>
        <View style={{ padding: 8 }}>
          <Text>End:</Text>
          <Text>{this.state.endLat + ',' + this.state.endLng}</Text>
          <Picker
            selectedValue={this.state.endLat + ',' + this.state.endLng}
            mode="dialog"
            style={{ height: 50, width: 'auto' }}
            onValueChange={(itemValue2, itemIndex) => {
              let res2 = itemValue2.split(",");
              this.setState({ endLat: res2[0], endLng: res2[1] })

            }}>
            {
              this.state.dataDrop.map((drop2, index) => {
                return (
                  <Picker.Item key={index} label={drop2.title} value={drop2.lat + ',' + drop2.lng} />
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

