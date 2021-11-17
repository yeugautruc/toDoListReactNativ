import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LandingScreen } from './src/screens/Landingscreen';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { HomeScreen } from './src/screens/HomeScreen';

const switchNavigator = createSwitchNavigator({
  landingStack: {
    screen: createStackNavigator({
      Landing: LandingScreen,
    }, {
      defaultNavigationOptions: {
        headerShown: false
      }
    })
  },
  homeStack: createBottomTabNavigator({
    // Home Tab Icon
    home: {
      screen: createStackNavigator({
        Homepage: HomeScreen
      }),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          let icon = focused == true ? require('./src/images/home_icon.png') : require('./src/images/home_icon_n.png')
          return <img src={icon} style={styles.tabIcon}></img>
        }
      }
    },

    // Offer Tab Icon
    Offer: {
      screen: createStackNavigator({
        Homepage: HomeScreen
      }),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          let icon = focused == true ? require('./src/images/home_icon.png') : require('./src/images/home_icon_n.png')
          return <img src={icon} style={styles.tabIcon}></img>
        }
      }
    },

    // Cart Tab Icon
    Cart: {
      screen: createStackNavigator({
        Homepage: HomeScreen
      }),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          let icon = focused == true ? require('./src/images/home_icon.png') : require('./src/images/home_icon_n.png')
          return <img src={icon} style={styles.tabIcon}></img>
        }
      }
    },

    // Account Tab Icon
    Account: {
      screen: createStackNavigator({
        Homepage: HomeScreen
      }),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          let icon = focused == true ? require('./src/images/home_icon.png') : require('./src/images/home_icon_n.png')
          return <img src={icon} style={styles.tabIcon}></img>
        }
      }
    }
  })
})

const AppNavigation = createAppContainer(switchNavigator)


export default function App() {
  return (
    <AppNavigation />
  );
}

const styles = StyleSheet.create({
  tabIcon: {
    width: 30,
    height: 30
  },
});
