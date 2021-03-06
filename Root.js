import React, { Component } from 'react';
import { YellowBox } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './src/screens/Login';
import Rooms from './src/screens/Rooms';
import Chat from './src/screens/Chat';

YellowBox.ignoreWarnings(["Setting a timer"]);

const RootStack = createStackNavigator(
  {
    Login,
    Rooms,
    Chat
  },
  {
    initialRouteName: "Login"
  }
);

const AppContainer = createAppContainer(RootStack);

class Router extends Component {
  render() {
    return <AppContainer />;
  }
}

export default Router;