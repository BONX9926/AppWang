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
import SettingScreen from '../tabs/SettingScreen'
export default TabNavigator(
  {
    Home: { 
      screen: HomeScreen
    },
    Settings: {
      screen :SettingScreen
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: '#000',
      style: {
        backgroundColor: '#fff',
      },
    },
  }
)

