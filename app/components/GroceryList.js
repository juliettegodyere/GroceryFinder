import React, { Component } from 'react';
import { Modal, StyleSheet, StatusBar, Button, ListView,FlatList} from 'react-native';
import { 
  Container, 
  Header, 
  View, 
  Content, 
  Item, 
  Text, 
  Icon, 
  Fab,
  Title,
  InputGroup, 
  Input,
   Left, 
   Body,
   List,
   ListItem,
   TouchableHighlight, 
   Right, } from 'native-base';

export default class GroceryList extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Grocery List',
    drawerIcon: ({ tintColor }) => (
      <Icon name="briefcase" />
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
  });

  constructor(props) {
    super(props)
    this.state = {
      active: 'true',
      modalVisible: false,
      groceryType:'',
      groceryCategory:'',
      groceryPrice:'',
    };
    this.groceryList = [
      {
        "name":"Donut",
        "category":"Bread",
        "price":"100"
      },
      {
        "name":"Brown cake",
        "category":"Cake",
        "price":"2000"
      },
      {
        "name":"Grape",
        "category":"Fruit",
        "price":"200"
      }
    ];
     
  }
  openModal() {
    this.setState({modalVisible:true});
  }

  closeModal() {
    this.setState({modalVisible:false});
  }

  addItem(){
    //alert(this.state.groceryType);
    let items = [];
    items.push({
      name:this.state.groceryType,
      category:this.state.groceryCategory,
      price:this.state.groceryPrice
    });
    this.groceryList= items;
    //alert(items);
    this.closeModal();
  }
  deleteItem(i){
    //alert(index);
    let items = this.groceryList;
    const index = items.indexOf(i);
        if (index < 0 ) return
        items.splice(index, 1)
    //const newList = items.filter((item, i) => i !== key);
    this.groceryList= items;
  }
  editItem(i){
  alert('Edit');
  }


  render() {
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <View><StatusBar backgroundColor="green" animated/></View>         
        </Header>
        <Content>
        { this.groceryList.map((item, key)=>(
          <List key={key} onPress={() => this.editItem(key)} >
            <ListItem itemDivider>
              <Text>{item.category}</Text>
            </ListItem>
            <ListItem>
              <Body>
                <Text>{item.name}</Text>
                <Text note>${item.price}</Text>
              </Body>
              <Right>
                <Icon name='trash'
                onPress={() => this.deleteItem(key)} 
                />
              </Right>
            </ListItem>
          </List>
          ))}
          <Modal
              visible={this.state.modalVisible}
              animationType={'slide'}
              presentationStyle={'formSheet'}
              onRequestClose={() => this.closeModal()}
          >
            <View style={styles.modalContainer}>
              <View style={styles.innerContainer}>
              <Text >Add Item</Text>
                <Item>
                  <Input 
                  placeholder="Grocery Type" 
                  autoCapitalize="none"
                  onChangeText={ (text) => this.setState({ groceryType: text }) }
                  />
                </Item>
                <Item>
                  <Input 
                  placeholder="Grocery Category" 
                  autoCapitalize="none"
                  onChangeText={ (text) => this.setState({ groceryCategory: text }) }
                  />
                </Item>
                <Item>
                  <Input 
                  placeholder="Grocery Price" 
                  autoCapitalize="none"
                  onChangeText={ (text) => this.setState({ groceryPrice: text }) }
                  />
                </Item>
                <View style={styles.modalButton}>
                <Button 
                    style={{color:'#2ecc71'}}
                    onPress={() => this.closeModal()}
                    title="Cancel"
                >
                </Button>
                <Button
                    onPress={() => this.addItem()}
                    title="AddItem"
                >
                </Button>
                </View>               
              </View>
            </View>
          </Modal>
          <View style={styles.fab}>
            <Fab
              active={this.state.active}
              direction="down"
              containerStyle={{ }}
              style={{ backgroundColor: '#2ecc71' }}
              position="bottomRight"
              onPress={() => this.openModal()}>
              <Icon name="add" />
            </Fab>
          </View>
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
  fab:{
    flex: 1,
    marginTop:150
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection:'column',
    alignItems:'center',
    backgroundColor: '#00000080'
  },
  innerContainer: {
    width:300,
    height:400,
    backgroundColor: '#fff', 
    padding: 20
  },
  modalButton:{
    //flex:1,
    flexDirection:'row',
    backgroundColor: '#fff',
    color:'#2ecc71',
    marginTop:30,
    marginLeft:100
  }
});

