
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  AppRegistry,
  Linking,
  StatusBar
} from 'react-native';
import {Container,Fab, Drawer, SwipeRow, Header, Content, Footer, Title, Icon, Button, Left, Body, Right, Card, CardItem, Thumbnail, Item, Input,  List, ListItem,} from 'native-base';
import {StackNavigator} from 'react-navigation';

export default class DishesProfile extends Component {
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
          active: 'true',
          ingredientsArr:[]
        };
      }
      
    render() {
        const {params} = this.props.navigation.state;
        //let ingredientsArr = params.ingredients.join("<br />");
        console.log(params.preparation);
    return (
        <Container style={styles.container}>
        <StatusBar backgroundColor="green" barStyle="light-content" hidden = {false}
        />
        <Content>
          <Card style={styles.cardMain}>
          <CardItem>
              <Left>
                <Body>
                <Text style={styles.nameText}>{params.name}</Text>
                <Text note style={styles.regionText}> {params.region}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: params.image}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem style={{flex:1, flexDirection:'row'}}>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" style={styles.likeIcon}/>
                  <Text >12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" style={styles.commentIcon}/>
                  <Text>4 Commentss</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
          <View style={styles.descriptionContainer}>
          <Button style={styles.descriptionButton}>
            <Text style={styles.descriptionTitle}>Description</Text>
          </Button>
          <Text style={styles.descriptionText}>{params.description}</Text> 
          <Text style={styles.urlText}
          onPress={() => Linking.openURL(params.url)}>Continue reading</Text>
          </View>
          <View style={styles.ingredientsContainer}>
          <Button style={styles.ingredientsButton}>
            <Text style={styles.ingredientsTitle}>Ingredients</Text>
          </Button>
          { params.ingredients.map((item, key)=>(
            <Text style={styles.ingredientsText}>#{item}</Text> 
          ))}
          </View>
          <View style={styles.preparationContainer}>
          <Button style={styles.preparationButton}>
            <Text style={styles.preparationTitle}>Prepartion Method</Text>
          </Button>
          <List dataArray={params.preparation}
            renderRow={(item) =>
              <ListItem>
                <Text>{item}</Text>
              </ListItem>
            }>
          </List>
          </View>
          <View style={styles.tagContainer}>
            <Text style={styles.tagHeader}>Related Tags</Text>
            <View style={styles.tagInnerContainer}>
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
    descriptionContainer1:{
      paddingLeft:10,
      marginTop: 10,
      
    },
    descriptionButton:{
        backgroundColor:'#2ecc71', 
        width:350
    },
    descriptionTitle:{
        color:'#fff', 
        fontFamily:'sans-serif',
        fontWeight: 'bold', 
        padding:5, 
        fontSize:25
    },
    descriptionText:{
        color:'#4f4f4f', 
        padding:5, 
        fontFamily:'sans-serif', 
        fontSize:18,
        marginTop:15,
    },
    urlText:{
        color: '#2ecc71',
        padding:5, 
        fontFamily:'sans-serif',
        fontWeight: 'bold',
        fontSize:20,
    },
    descriptionContainer:{
        marginTop:15, 
        marginBottom:15
    },
    ingredientsContainer:{
        //paddingLeft:10,
        marginTop: 10,
        
      },
      ingredientsButton:{
          backgroundColor:'#2ecc71', 
          width:350
      },
      ingredientsTitle:{
          color:'#fff', 
          fontFamily:'sans-serif',
          fontWeight: 'bold', 
          padding:5, 
          fontSize:25
      },
      ingredientsText:{
          color:'#4f4f4f', 
          padding:5, 
          fontFamily:'sans-serif', 
          fontSize:18,
          marginTop:15,
      },
      preparationContainer:{
        //paddingLeft:10,
        marginTop: 10,
      },
      preparationButton:{
        backgroundColor:'#2ecc71', 
          width:350
      },
      preparationTitle:{
        color:'#fff', 
        fontFamily:'sans-serif',
        fontWeight: 'bold', 
        padding:5, 
        fontSize:25
      },
      preparationText:{
        color:'#4f4f4f', 
          padding:5, 
          fontFamily:'sans-serif', 
          fontSize:18,
          marginTop:15,
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
    nameText:{
        color:'#222222', 
        fontFamily:'sans-serif',
        fontSize:25, 
        fontWeight: 'bold',
    },
    regionText:{ 
        fontWeight: 'bold', 
        fontFamily:'sans-serif', 
        color:'#727272', 
        fontSize:20 
    },
    likeIcon:{color:'#000', 
        fontFamily:'sans-serif',
        fontWeight: 'bold'
    },
    commentIcon:{color:'#000', 
        fontFamily:'sans-serif',
        fontWeight: 'bold'
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
    },
    tagContainer:{
        borderTopColor:'#4f4f4f',  
        borderTopWidth: 0.5, 
        marginTop:15,
    },
    tagHeader:{
        color:'#222222', 
        padding:5, 
        fontFamily:'sans-serif', 
        fontSize:25, 
        marginTop:15,  
        marginBottom:15
    },
    tagInnerContainer:{
        marginTop:15, 
        marginBottom:15,
        flex: 1, 
        flexDirection: 
        "row",
    },
   
   });