import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Image
} from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'
// import { Container, Content } from 'native-base';
// import Card from '../tabs/CardScreen';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }
  componentDidMount() {
    return fetch('http://nisakorn.com/student/chanika/index.php/api/getwang')
      .then((response) => response.json())
      .then((responseJson) => {

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


  // cardRender() {
  //   return this.state.dataSource.map((data, index) => {
  //     return (
  //       <Card
  //         key={index}
  //         api_id={data.api_id}
  //         title={data.title}
  //         img={data.img}
  //         detail={data.detail}
  //         lat={data.lat}
  //         lng={data.lng}
  //       />
  //     )
  //   });
  // }
  onLearnMore = () => {
    this.props.navigation.navigate('Details');
  };
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
          {
            this.state.dataSource.map((data, index) => {
              return (
                <Card key={index}>
                  <CardItem>
                    <Left>
                      <Body>
                        <TouchableOpacity>
                          <Text onPress={() => this.onLearnMore()}>{data.title}</Text>
                        </TouchableOpacity>
                        <Text note>
                          <Text style={{ fontWeight: "900" }}>ก่อตั้งเมื่อ :</Text>
                          Jan 15, 2018
                  </Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem cardBody>
                    {/* <Text style={{ height: 200, width: null, flex: 1 }}>{data.img}</Text> */}
                    <Image source={{ uri: 'https://img.kapook.com/u/2016/suppaporn/bkk/temple/temple01.jpg' }} style={{ height: 200, width: null, flex: 1 }} />
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
                    <Text>ID :{data.api_id}</Text>
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Text>
                        <Text style={{ fontWeight: "900" }}>varun</Text>
                        <Text>Lat: {data.lat}</Text>
                        <Text>Lat: {data.lng}</Text>
                        <Text>Detail: {data.detail}</Text>
                      </Text>
                    </Body>
                  </CardItem>
                </Card>
              )
            })
          }
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

