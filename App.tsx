import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import { LandingScreen } from './src/screens/Landingscreen';
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
    Home: {
      screen: createStackNavigator({
        Homepage: HomeScreen
      }),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          let icon = focused == true ? require('./src/images/home_icon.png') : require('./src/images/home_icon_n.png')
          return <Image style={styles.tabIcon} source={icon} />;
        }
      }
    },

    // Offer Tab Icon
    Offer: {
      screen: createStackNavigator({
        OfferPage: HomeScreen
      }),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          let icon = focused == true ? require('./src/images/offer_icon.png') : require('./src/images/offer_icon_n.png')
          return <Image style={styles.tabIcon} source={icon} />;
        }
      }
    },

    // Cart Tab Icon
    Cart: {
      screen: createStackNavigator({
        CartPage: HomeScreen
      }),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          let icon = focused == true ? require('./src/images/cart_icon_n.png') : require('./src/images/cart_icon.png')
          return <Image style={styles.tabIcon} source={icon} />;
        }
      }
    },

    // Account Tab Icon
    Account: {
      screen: createStackNavigator({
        AccountPage: HomeScreen
      }),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          let icon = focused == true ? require('./src/images/account_icon.png') : require('./src/images/account_icon_n.png')
          return <Image style={styles.tabIcon} source={icon} />;
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
