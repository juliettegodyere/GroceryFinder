import React, { Component } from 'react';
import {Text, Image,StyleSheet, View, TouchableHighlight} from 'react-native';
import {Container, Header, Content, ListItem, List, Left, Icon, Body, Right, Switch,Card, CardItem,CardBody} from 'native-base';
import GroceryList from './GroceryList'

export default class Sidebar extends Component {
    constructor(props) {
        super(props)
        
      }

  render() {
    //const { navigate } = this.props.navigator;
    //const { params } = this.props.navigation.state;   
    return (
        <Container>
            <Content style={{backgroundColor:'#FFFFFF'}}>
                <View>
                    <Card style={styles.cardMain}>
                        <CardItem>
                            <Image source={{uri: 'https://www.tasteofhome.com/wp-content/uploads/2017/09/exps9343_GB153642B01_07_2b-1-300x300.jpg'}} style={{height: 200, width:null, flex: 1,resizeMode:'cover',}}/>
                        </CardItem>
                    </Card>
                </View>
                <List>
                    <ListItem icon>
                        <Left>
                            <Icon name="home" />
                        </Left>
                        <Body>
                            <Text>Home</Text>
                        </Body>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon name="person" />
                        </Left>
                        <Body>
                            <Text>My Account</Text>
                        </Body>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon name="heart" />
                        </Left>
                        <Body>
                            <Text>Favorites</Text>
                        </Body>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon name="cart" />
                        </Left>
                        <Body>
                        <TouchableHighlight
                            //onPress={() => navigate('GroceryList')}
                            onPress={() => navigate('GroceryList', {name: 'GroceryList'})}
                            style={[styles.button, {backgroundColor: '#8E84FB'}]}>
                            <Text style={styles.buttonText}>Grocery List</Text>
                            </TouchableHighlight>

                        </Body>
                    </ListItem>

                    <ListItem icon>
                        <Left>
                            <Icon name="briefcase" />
                        </Left>
                        <Body>
                            <Text>New Arrivals</Text>
                        </Body>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon name="calendar" />
                        </Left>
                        <Body>
                            <Text>Today's Specials</Text>
                        </Body>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon name="attach file" />
                        </Left>
                        <Body>
                            <Text>Purchase Prenium</Text>
                        </Body>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon name="share" />
                        </Left>
                        <Body>
                            <Text>Share App</Text>
                        </Body>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon name="create" />
                        </Left>
                        <Body>
                            <Text>Feedback</Text>
                        </Body>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon name="globe" />
                        </Left>
                        <Body>
                            <Text>Category</Text>
                        </Body>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon name="settings" />
                        </Left>
                        <Body>
                            <Text>Settings</Text>
                        </Body>
                    </ListItem>
                </List>
            </Content>
        </Container>
    );
  }
}
const styles = StyleSheet.create({
    container:{
      backgroundColor:'#fff',
      fontFamily:'sans-serif'
      
    },
    mainContainer: {
       flex: 1,
       backgroundColor: 'white',
       height: 24
    },
    cardMain:{
        shadowColor: 'transparent',
        borderBottomWidth: 0,
        elevation: 0,
        shadowOpacity: 0,
        marginTop:-1,
        marginBottom:10,
        padding:0
    }
   });
