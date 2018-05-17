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
import { Icon } from 'native-base';
import { SegmentedControls } from 'react-native-radio-buttons';

export default class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      start_Lat: 13.7500301,
      start_Lng: 100.4890995,
      end_Lat: 13.7500299,
      end_Lng: 100.4825334,
      selectedOption: 'driving'
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
          value: this.state.selectedOption        // may be "walking", "bicycling" or "transit" as well
        }
      ]
    }
    getDirections(data)
  }

  setSelectedOption(value){
    this.setState({
      selectedOption: value
    });
  }

  render() {
    const options = [
      'driving',
      'walking',
      'bicycling',
      'transit'
    ];
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator size="large" />
        </View>
      )
    }
    return (
      <View style={{ padding: 8, display: 'flex' }}>
        <View style={{ padding: 8 }}>
          <Text>Start:</Text>
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
        <View style={{ padding: 8 }}>
          <Text>Mode:</Text>
          <SegmentedControls
            tint={'#f80046'}
            selectedTint={'white'}
            backTint={'#1e2126'}
            options={options}
            allowFontScaling={false} // default: true
            onSelection={ e => this.setSelectedOption(e)}
            selectedOption={this.state.selectedOption}
            optionContainerStyle={{ flex: 1 }}
          />
        </View>
        <Button onPress={this.handleGetDirections} title="Get Directions" />
      </View>
    );
  }
}

