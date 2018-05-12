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
} from 'react-native';
import { Container, Content } from 'native-base';
import Card from '../tabs/CardScreen';
export default class HomeScreen extends Component {
  click() { }
  render() {
    return (
      <Container>
        <Content>
          <Card likes="100"/>
          <Card likes="80"/>
          <Card likes="99"/>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

