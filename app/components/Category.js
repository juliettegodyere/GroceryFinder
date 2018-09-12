import React, { Component } from 'react';
import { Modal, StyleSheet} from 'react-native';
import { Container, Header, View, Content, Card, CardItem, Text, Body, Button, Icon, Fab } from 'native-base';

export default class Category extends Component {
  static navigationOptions = {
    drawerLabel: 'Category',
    drawerIcon: ({ tintColor }) => (
      <Icon name="globe" />
    ),
  }
  constructor(props) {
    super(props)
     
  }

  render() {
    return (
      <Container>
        <Header />
        <View style={{ flex: 1 }}>
          
        </View>
      </Container>
    );
  }
}

