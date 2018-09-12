
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  List,
  ListView,
  AppRegistry,
  Linking,
  StatusBar
} from 'react-native';
import {Container,Fab, Drawer, SwipeRow, Header, Content, Footer, Title, Icon, Button, Left, Body, Right, Card, CardItem, Thumbnail, Item, Input } from 'native-base';
import {StackNavigator} from 'react-navigation';

export default class Profile extends Component {
    static navigationOptions = ({navigation}) => ({
        title: `${navigation.state.params.name}`,
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
          // shadowColor: 'transparent',
          // borderBottomWidth: 0,
          // elevation: 0,
          // shadowOpacity: 0,
          fontFamily:'sans-serif'
        },
        headerTitleStyle:{
          color:'white',
          fontSize: 25,
          fontWeight:'bold',
        },
      });

      constructor(props) {
        super(props);

        this.state = {
          active: 'true'
        };
      }
    
  
    render() {
        const {params} = this.props.navigation.state;
    return (
        <Container style={styles.container}>
        <StatusBar backgroundColor="green" barStyle="light-content" hidden = {false}
        />
        <Content>
          <Card style={styles.cardMain}>
          <CardItem>
              <Left>
                <Body>
                <Text style={{color:'#222222', fontFamily:'sans-serif',fontSize:25, fontWeight: 'bold',}}>{params.name}</Text>
                <Text note style={{ fontWeight: 'bold', fontFamily:'sans-serif', color:'#727272', fontSize:20 }}> {params.category}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: params.image}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem style={{flex:1, flexDirection:'row'}}>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" style={{color:'#000', fontFamily:'sans-serif',fontWeight: 'bold'}}/>
                  <Text >12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" style={{color:'#000', fontFamily:'sans-serif',fontWeight: 'bold'}}/>
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
          <View style={{marginTop:15, marginBottom:15}}>
          <Button style={{backgroundColor:'#2ecc71', width:350}}>
            <Text style={{color:'#fff', fontFamily:'sans-serif',fontWeight: 'bold', padding:5, fontSize:25}}>Description</Text>
          </Button>
          <Text style={{color:'#4f4f4f', padding:5, fontFamily:'sans-serif', fontSize:18, marginTop:15,}}>{params.description}</Text> 
          <Text style={{color: '#2ecc71',padding:5, fontFamily:'sans-serif',fontWeight: 'bold',fontSize:20,}}
          onPress={() => Linking.openURL(params.url)}>Continue reading</Text>
          </View>
          <View style={{borderTopColor:'#4f4f4f',  borderTopWidth: 0.5, marginTop:15,}}>
            <Text style={{color:'#222222', padding:5, fontFamily:'sans-serif', fontSize:25, marginTop:15,  marginBottom:15}}>Related Tags</Text>
            <View style={{marginTop:15, marginBottom:15,flex: 1, flexDirection: "row",}}>
            <Button rounded iconLeft style={styles.tagStyle}>
              <Text style={styles.textTag}>#Chicken</Text>
            </Button>
            <Button rounded iconCenter style={styles.tagStyle}>
              <Text style={styles.textTag}>#Chinese</Text>
            </Button>
            <Button rounded iconRight style={styles.tagStyle} >
              <Text style={styles.textTag}>#Soup</Text>
            </Button>
            <Button rounded iconRight style={styles.tagStyle}>
              <Text style={styles.textTag}>#Vegetable</Text>
            </Button>
            </View>
          </View>  
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
    title:{
      fontSize:25,
      color:'#0C090A',
      fontWeight:'bold'
    },
    titleContainer:{
      paddingLeft:10,
      marginTop: 10
      
    },
    description:{
      fontSize:18,
      color:'#0C090A',
      fontWeight:'bold'
    },
    descriptionContainer:{
      paddingLeft:10,
      marginTop: 10
    },
    contentContainer: {
       flex: 6,
       
    },
    cardMain:{
        // shadowColor: 'transparent',
        // borderBottomWidth: 0,
        // elevation: 0,
        // shadowOpacity: 0,
        marginTop:-1,
        marginBottom:10
    },
    tagStyle:{
      borderWidth:0.5, 
      borderColor:'#2ecc71', 
      backgroundColor:'#fff',
      padding:5
    },
    textTag:{
      color:'#2ecc71', 
      fontFamily:'sans-serif',
      fontWeight: 'bold', 
      textAlign:'center'
    }
   });