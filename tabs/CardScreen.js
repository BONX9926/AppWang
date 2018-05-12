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
  TouchableOpacity
} from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'
export default class CardScreen extends Component {

  render() {
    return (
      <Card>
        <CardItem>
          <Left>
            {/* <Thumbnail source={require('../assets/me.jpg')} /> */}
            <Body>
              <Text>Varun </Text>
              <Text note>Jan 15, 2018</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
        <Text style={{ height: 200, width: null, flex: 1 }}></Text>
          {/* <Image source={images[this.props.imageSource]} style={{ height: 200, width: null, flex: 1 }} /> */}
        </CardItem>
        <CardItem style={{ height: 45 }}>
          <Left>
            <TouchableOpacity style={styles.icons} transparent>
              <Icon name="ios-heart-outline" style={{ fontSize: 20, color: 'black' }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icons} transparent>
              <Icon name="ios-chatbubbles-outline" style={{ fontSize: 20, color: 'black' }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icons} transparent>
              <Icon name="ios-send-outline" style={{ fontSize: 20, color: 'black' }} />
            </TouchableOpacity>
          </Left>
        </CardItem>

        <CardItem style={{ height: 20 }}>
          <Text>{this.props.likes} likes</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>
              <Text style={{ fontWeight: "900" }}>varun
                  </Text>
              Ea do Lorem occaecat laborum do. Minim ullamco ipsum minim eiusmod dolore cupidatat magna exercitation amet proident qui. Est do irure magna dolor adipisicing do quis labore excepteur. Commodo veniam dolore cupidatat nulla consectetur do nostrud ea cupidatat ullamco labore. Consequat ullamco nulla ullamco minim.
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

