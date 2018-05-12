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
  Image
} from 'react-native';

import { TabNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../tabs/HomeScreen'
import SearchScreen from '../tabs/SearchScreen'
import MapsScreen from '../tabs/MapsScreen'
export default TabNavigator(
  {
    Home: { 
      screen: HomeScreen
    },
    Search: {
      screen : SearchScreen,
    },
    Maps: {
      screen : MapsScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'Search') {
          iconName = `ios-search${focused ? '' : '-outline'}`;
        } else if (routeName === 'Maps') {
          iconName = `ios-map${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: '#000',
      inactiveTintColor: '#000',
      showIcon: true,
      showLabel: false,
      inactiveBackgroundColor : '#fff',
      iconStyle: {
        width: 35,
        height: 60
      },
      tabStyle: {
        height: 40
      },
      style: {
        backgroundColor: '#fff',
      },
      indicatorStyle: {
        backgroundColor: 'white',
      },//line active and set
    },
  }
)

