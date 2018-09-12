
import React, { Component } from 'react';
import {Platform,StyleSheet,Text,View,Image,TouchableHighlight,List,ListView,AppRegistry,StatusBar,ActivityIndicator, Alert} from 'react-native';
import {Container, Drawer, SwipeRow, Header, Content, Footer, Title, Icon, Button, Left, Body, Right, Card, CardItem, Thumbnail, InputGroup, Input, Fab} from 'native-base';
//Batabase Import
import { fetch } from 'fetch';
import * as firebase from 'firebase';
//Components
import Profile from './Profile';
import SideBar from './SideBar'
import TopScroll from './TopScroll'

//Database config
const firebaseConfig = {
  apiKey: "AIzaSyC8nB_g1MV5myIz7Iax6N_bJCeHbAlFg-c",
  authDomain: "grocery-list-app-a22a5.firebaseapp.com",
  databaseURL: "https://grocery-list-app-a22a5.firebaseio.com",
  projectId: "grocery-list-app-a22a5",
  storageBucket: "grocery-list-app-a22a5.appspot.com",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class Home extends Component {
  static navigationOptions = {
    headerVisible: false,
    headerStyle:{
      height:0,  
    },
  }
 
  constructor(props) {
    super(props)
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})   
    this.state = {
      itemDataSource: ds,
      isloading: true,
      text:'',
      active: 'true'
    }
    this.arrayHolder = [];
    this.itemsRef = this.getRef().child('items');

    this.renderRow = this.renderRow.bind(this);  
  }

  getRef (){
    return firebaseApp.database().ref();
  }

  componentWillMount() {
   this.getItems(this.itemsRef);
  }
  componentDidMount() {
   this.getItems(this.itemsRef);
  }

  getItems (itemsRef){
    //let item = [{title:'item one'},{title:'item two'}];
    itemsRef.on('value', (snap) => {
        let items = [];
        snap.forEach((child) => {
            items.push({
                name:child.val().name,
                category:child.val().category,
                price:child.val().price,
                image:child.val().Images,
                description:child.val().Decription,
                _key: child.key
            });
        });
        this.setState({
           itemDataSource: this.state.itemDataSource.cloneWithRows(items),
           isloading:false
       });
       this.arrayHolder = items;
    });
  };

  SearchFilterFunction(text){   
    const newData = this.arrayHolder.filter(function(item){
        const itemData = item.name.toUpperCase()
        const textData = text.toUpperCase()
        return itemData.indexOf(textData) > -1
    })
    this.setState({
      itemDataSource: this.state.itemDataSource.cloneWithRows(newData),
        text: text
    })
  }

  ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: .5,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  }

  renderRow(item) {
    const {navigate} = this.props.navigation;    
    return (
    <TouchableHighlight onPress={() => navigate('Profile', {image: item.image, name:item.name, category:item.category, description:item.description, price:item.price, url:item.url})}>
        <Card>
          <CardItem cardBody>
              <Image source={{uri:item.image }} style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
          <CardItem>
            <Left>
            <Body>
                <Text style={{color:'#000', fontSize:18, fontWeight:'400'}}>{item.name}</Text>
                <Text note style={{ fontWeight:'400', color:'#666', fontSize:18 }}> N{item.price}</Text>
            </Body>
            </Left>
            <Right>
            <View style={{flex:1,marginTop:100}}>
            <Fab
              active={this.state.active}
              direction="down"
              containerStyle={{ }}
              style={{ backgroundColor: '#2ecc71' }}
              position="bottomRight"
              onPress={() => this.setState({ active: !this.state.active })}
              >
              <Icon name="add" />
            </Fab>
          </View>
            </Right>
          </CardItem>
        </Card>
   </TouchableHighlight>
   )
  }

  closeDrawer  () {
    this._drawer._root.close()
  };
  openDrawer  () {
    this._drawer._root.open()
  };

  render() {
   const {navigate} = this.props.navigation; 
   //console.log(this.props.navigation);
   if (this.state.isLoading) {
    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <ActivityIndicator />
      </View>
    );
  }   
    return (
        <Container style={styles.container}>
         
        <Header searchBar rounded style={styles.mainHeader}>
        <View>
          <StatusBar
                backgroundColor="green"
                animated
          />
        </View> 
        <InputGroup 
          style={styles.InputGroup}>
          <Icon name='ios-menu' style={styles.menuIcon} 
            // onPress={()=>{
            //     this.openDrawer();
            // }}
            onPress={() => navigate('DrawerOpen')}
          />
          <Input 
          placeholder='Search for groceries' 
          style={{color:'#000', fontSize:20}}
          onChangeText={(text) => this.SearchFilterFunction(text)}
          value={this.state.text}
          underlineColorAndroid='transparent'
          />
            <Icon name='ios-search' style={{color:'#000', marginRight:8, fontSize:25}}/>
        </InputGroup>          
      </Header>
      <Content>
        <TopScroll/>
      <ListView
            initialListSize={5}
            //renderSeparator= {this.ListViewItemSeparator}
            enableEmptySections={true}
            dataSource={this.state.itemDataSource}
            renderRow={this.renderRow} />
      </Content>
     
    </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#fff'
  },
  mainHeader:{
    backgroundColor: '#2ecc71',
    height:80,
    //marginTop:-1,
  },
  InputGroup:{
    backgroundColor: '#fff',
    height:50,
    marginTop:17,
    flexDirection:'row',
    flex:1
  },
  IconStyle:{
    color:'#000',
    //fontSize:25
  },
  headerTitle:{
    color:'#000',
    marginLeft:-15
    //fontSize:25
  },
  menuIcon:{
    color:'#000',
    fontSize:25, 
    padding:15
  }
});
