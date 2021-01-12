import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TransactionScreen from './screens/BookTransactionScreen';
import SearchScreen from './screens/SearchScreen';
import LoginScreen from './screens/LoginScreen';

export default class App extends React.Component { 
  render() {
    return <AppContainer />;
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    Transaction: { screen: TransactionScreen },
    Search: { screen: SearchScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const routeName = navigation.state.routeName; //routename tells the active tab that you are on
        if (routeName === 'Transaction') {
          return (
            <Image
              source={require('./assets/book.png')}
              style={{ width: 30, height: 30 }}
            />
          );
        } else if (routeName === 'Search') {
          return (
            <Image
              source={require('./assets/searchingbook.png')}
              style={{ width: 30, height: 30 }}
            />
          );
        }
      },
    }),
  }
);

const Switch1Navigator = createSwitchNavigator({
  Login:LoginScreen,
  TabNavigator:TabNavigator
})


const AppContainer = createAppContainer(Switch1Navigator);
