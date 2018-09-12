import React, { Component } from 'react';
import { Modal, StyleSheet,StatusBar, FlatList, Text} from 'react-native';
import { Container, Header, View, Content, Item, Input, Card, CardItem, Body, Button, Icon, List, ListItem, Left} from 'native-base';
import { fetch } from 'fetch';

export default class RestuarantFinder extends Component {

  static navigationOptions = {
    title: 'Resturant/Joint Finder',
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
    super(props)

    this.state = {
        loading: false,
        data: [],
        page: 1,
        seed: 1,
        error: null,
        refreshing: false,
      };
      this.makeRemoteRequest = this.makeRemoteRequest.bind(this);  
  }

  componentDidMount() {
    this.makeRemoteRequest();
    //console.log(this.state.data);
    //console.log("component did mount");
  }

  makeRemoteRequest ()  {
    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    this.setState({ loading: true });
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false
        });
        //console.log(res.results);
        //console.log("In fetch");
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  render() {
    //console.log(this.state.data);
    //console.log("In render");
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <View><StatusBar backgroundColor="green" animated/></View>         
        </Header>
        <Content>
            <Item regular style={{paddingTop:20}}>
                <Input placeholder='What are you looking for?' />
            </Item>
            <Item regular style={{paddingTop:20}}>
                <Input placeholder='Which Location?' />
            </Item>
            <List>
                <FlatList
                data={this.state.data}
                renderItem={({ item }) => (
                  <ListItem>
                    
                    <Body style={{padding:1}}>
                        <Text>{item.name.first} {item.name.last}</Text>
                        <Text note>{item.email}</Text>
                    </Body>
                    </ListItem>
                  )}
                />
            </List>
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