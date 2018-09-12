import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import App from './App';

export default class GroceryFinder extends Component {
  render() {
    return <App/>
  }
}
  
AppRegistry.registerComponent('GroceryFinder', () => GroceryFinder);
  