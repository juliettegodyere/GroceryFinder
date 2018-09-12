import React, { Component } from 'react';
import { Modal, StyleSheet, StatusBar, Image, TouchableHighlight, ListView} from 'react-native';
import { Container, Header, View, Content,Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

import DishesProfile from './DishesProfile'
import DishesArray from './dishesArray'

export default class Dishes extends Component {
  static navigationOptions = {
    title: 'Nigeria Dishes',
    drawerIcon: ({ tintColor }) => (
      <Icon name="restaurant" />
    ),
    headerRight: 
    <Icon active name='share' style={{color:'#fff', marginRight:20, fontSize:35,fontWeight:'bold'}}
    />, 
    headerTintColor: 'white',       
    headerStyle:{
      height:80,
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: "#2ecc71",
      paddingRight: 5,
      fontFamily:'sans-serif'
    },
    headerTitleStyle:{
      color:'white',
      fontSize: 25,
      fontWeight:'bold',
    },
  }

  constructor(props) {
    super(props);
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})   
    this.state = {
      itemDataSource: ds,
      arrayList : DishesArray.items,
    }
    this.renderRow = this.renderRow.bind(this);  
     
  }

  renderRow(item) {
    const {navigate} = this.props.navigation;
    console.log(item);
      return (
        <TouchableHighlight onPress={() => navigate('DishesProfile', {image: item.image, name:item.name,region:item.region, price:item.price, description:item.description, ingredients:item.ingredients, preparation:item.preparation})}>
            <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text>{item.name}</Text>
                  <Text note>{item.region}</Text>
                </Body>
              </Left>
              <Right>
                <Body>
                  <Text note>${item.price}</Text>
                </Body>
              </Right>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: item.image}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
      </TouchableHighlight>
   )
  }

  render() {
    console.log(this.state.arrayList);
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <View><StatusBar backgroundColor="green" animated/></View>         
        </Header>
        <Content>
        <ListView
            initialListSize={5}
            //renderSeparator= {this.ListViewItemSeparator}
            horizontal={false}
            style={{flex:1}}
            enableEmptySections={true}
            dataSource={this.state.itemDataSource.cloneWithRows(this.state.arrayList)}
            renderRow={this.renderRow} />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#fff',
    fontFamily:'sans-serif',
  },
  mainHeader:{
    backgroundColor: '#2ecc71',
    height:80,
    //marginTop:-1,
  },
  header:{
    backgroundColor: '#2ecc71',
    height:0,
    //marginTop:17,
    //flexDirection:'row',
    //flex:1
  },
 
});

