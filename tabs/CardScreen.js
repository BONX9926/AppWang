import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'
export default class CardScreen extends Component {

  render() {
    return (
      <Card>
        <CardItem>
          <Left>
            <Body>
              <Text>{this.props.title}</Text>
              <Text note>
                <Text style={{ fontWeight: "900" }}>ก่อตั้งเมื่อ :</Text>
                Jan 15, 2018
              </Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          {/* <Text style={{ height: 200, width: null, flex: 1 }}>{this.props.img}</Text> */}
          <Image source={{uri: 'https://img.kapook.com/u/2016/suppaporn/bkk/temple/temple01.jpg'}} style={{ height: 200, width: null, flex: 1 }} />
        </CardItem>
        <CardItem style={{ height: 45 }}>
          <Left>
            <TouchableOpacity style={styles.icons} transparent>
              <Text>
                1
                <Icon name="ios-eye-outline" style={{ fontSize: 20, color: 'black' }} />
              </Text>
            </TouchableOpacity>
          </Left>
        </CardItem>

        <CardItem style={{ height: 20 }}>
          <Text>ID :{this.props.api_id}</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>
              <Text style={{ fontWeight: "900" }}>varun</Text>
              <Text>Lat: {this.props.lat}</Text>
              <Text>Lat: {this.props.lng}</Text>
              <Text>Detail: {this.props.detail}</Text>
            </Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icons: {
    paddingHorizontal: 4
  }
});

