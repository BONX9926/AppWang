import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native';


export default class DetailsScreen extends Component {

  render() {
    console.warn('params', this.props.navigation.state.params);
    const { api_id, title, detail, img, lat, lng } = this.props.navigation.state.params;
    
    return (
      <View style={{ flex: 1, position: 'absolute', height: 200 , width: 'auto', backgroundColor: 'white'}}>
        <View style={{ flex: 2, backgroundColor: 'black' }}>
          <Image source={{ uri: 'https://img.kapook.com/u/2016/suppaporn/bkk/temple/temple01.jpg' }} style={{ height: 200, width: null, flex: 1, resizeMode: 'center' }} />
        </View>
        <View style={{ flex: 3, padding: 5 }}>
          <Text>
            <Text style={{ fontWeight: '900', fontSize: 16}}>{title}</Text>
            <Text style={{ fontWeight: '400'}}>ก่อตั้งเมื่อ : </Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
        </View>
      </View>
    );
  }
}

