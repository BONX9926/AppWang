import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Animated,
  View,
} from 'react-native';


class FadeInView extends Component {
  state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
  }

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 2000,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }
  render() {
    let { fadeAnim } = this.state;
    return (
      <Animated.View                 // Special animatable View
      style={{
        ...this.props.style,
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {this.props.children}
    </Animated.View>
    );
  }
}

export default class Splash extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#273746' }}>
        <FadeInView style={{width: 250, height: 50, backgroundColor: 'white', borderRadius: 5 }}>
          <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>//ANG</Text>
        </FadeInView>
      </View>
    )
  }
}
