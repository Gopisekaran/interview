/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  YellowBox
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import AppNavigator from "./src/Components/Splash";
const AppContainer = createAppContainer(AppNavigator);

YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader",
  "Setting a timer",
  "Warning: Can't perform"
]);
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
