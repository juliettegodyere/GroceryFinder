import React, { Component } from 'react';

import { StackNavigator , DrawerNavigator} from 'react-navigation';
import Home from './app/components/Home';
import Profile from './app/components/Profile';
import SideBar from './app/components/SideBar';
import GroceryList from './app/components/GroceryList';
import Category from './app/components/Category';
import MyRecipe from './app/components/MyRecipe';
import Dishes from './app/components/Dishes';
import DishesProfile from './app/components/DishesProfile';
import TopScroll from './app/components/TopScroll';
import ResturantFinder from './app/components/ResturantFinder';

const App = StackNavigator({  
  Home: { screen: Home},
  Profile: { screen: Profile},
  GroceryList:{screen:GroceryList},
  Dishes:{screen:Dishes},
  DishesProfile:{screen:DishesProfile},
  TopScroll:{screen:TopScroll},
  ResturantFinder:{screen:ResturantFinder}

});
const DrawerNavigation= DrawerNavigator({
    Home: { screen: App},
    GroceryList:{screen:GroceryList},
    Category: { screen: Category},
    MyRecipe:{screen:MyRecipe},
    Dishes:{screen:Dishes},
    ResturantFinder:{screen:ResturantFinder}
  });

  export default DrawerNavigation;
  
  