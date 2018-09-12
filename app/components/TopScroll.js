import React, { Component } from 'react';
import {Platform,StyleSheet,Text,View,Image,TouchableHighlight,List,ListView,AppRegistry,StatusBar,ActivityIndicator, Alert} from 'react-native';
import { Container, Header, Content,Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';

import DishesArray from './dishesArray'
import DishesProfile from './DishesProfile'

export default class TopScroll extends Component {
    constructor(props) {
      super(props);
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        itemDataSource: ds,
        arrayList : DishesArray.items,
      };
      this.renderRow = this.renderRow.bind(this);  

    }
    
    renderRow(item) {
        //const {navigate} = this.props.navigation;
        console.log(item);
          return (
            <TouchableHighlight>
                <Card>
                <CardItem>
                  <Left>
                    <Body>
                      <Text style={styles.titleText}>{item.name}</Text>
                      <Text note>{item.region}</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image source={{uri: item.image}} style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
              </Card>
          </TouchableHighlight>
       )
      }
      
    render() {
      return (
        <ListView
          horizontal={true}
          style={{flex:1}}
          dataSource={this.state.itemDataSource.cloneWithRows(this.state.arrayList)}
            renderRow={this.renderRow} />
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
    headerText:{
        fontSize:20,
        //fontWeight:20
    },
   
  });