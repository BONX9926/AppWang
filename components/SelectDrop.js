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
  Picker,
  Alert
} from 'react-native';

export default class SelectDrop extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    return fetch('http://nisakorn.com/student/chanika/index.php/api/getwang')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          dataDrop: responseJson,
        }, function () {

        });

      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      <View>{this.props.init}</View>
      // <Picker
      //   selectedValue={this.props.init}
      //   mode="dropdown"
      //   style={{ height: 50, width: 'auto' }}
      //   onValueChange={(itemValue, itemIndex) => { Alert.alert(itemValue) }}>
      //   {/* onValueChange={(itemValue, itemIndex) => this.setState({ inti: itemValue })}> */}
      //   {
      //     this.state.dataDrop.map((data, index) => {
      //       return (
      //         <Picker.Item key={index} label={data.title} value={data.title} />
      //       )
      //     })
      //   }
      //   {/* <Picker.Item label="JavaScript" value="js" /> */}
      // </Picker>
    );
  }
}
