import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import { Container, Content } from 'native-base';
import Card from '../tabs/CardScreen';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }
  componentDidMount() {
    return fetch('http://nisakorn.com/student/chanika/index.php/api/getwang')
      .then((response) => response.json())
      .then((responseJson) => {
        console.warn('api', responseJson);
        
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function () {

        });

      })
      .catch((error) => {
        console.error(error);
      });
  }


  cardRender() {
    return this.state.dataSource.map( (data, index) => {
      return (
        <Card 
          key={index}
          api_id={data.api_id}
          title={data.title}
          img={data.img}
          detail={data.detail}
          lat={data.lat}
          lng={data.lng}
        />
      )
    });
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
      <Container>
        <Content>
          {this.cardRender()}
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

