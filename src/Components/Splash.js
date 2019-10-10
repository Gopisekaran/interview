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
import Images from "./Images";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import OpenCamera from "./OpenCamera";
import ResultPage from "./ResultPage";
import ListItems from "./ListItems";
YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader"
]);

class Splash extends Component {
  static navigationOptions = {
    headerTransparent: true,
    headerMode: "none",
    headerLeft: null
  };
  render() {
    return (
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#2c3e50", "#4ca1af"]}
        style={styles.linearGradient}
      >
        <StatusBar backgroundColor="#2c3e50" barStyle="light-content" />

        <View style={styles.wrapper}>
          <View style={styles.imagecontainer}>
            <Image style={styles.logo} source={Images.QrLogo} />
          </View>
          <View style={styles.titlewrapper}>
            <Text style={styles.title}> ScanQR </Text>
          </View>
          <View style={styles.buttoncontainer}>
            <TouchableOpacity
              style={styles.buttonstyle}
              onPress={() => this.props.navigation.navigate("Details")}
            >
              <View style={styles.buttontextcontainer}>
                <Text style={styles.buttonText}>START SCAN</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    );
  }
}
const AppNavigator = createStackNavigator(
  {
    Home: Splash,
    Details: OpenCamera,
    Result: ResultPage,
    ShowResult: ListItems
  },
  {
    initialRouteName: "Home"
  }
);
export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15
  },
  wrapper: {
    //backgroundColor: "#20bf6b",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 100
  },
  title: {
    color: "white",
    fontSize: 35
  },
  subtitle: {
    color: "white",
    fontWeight: "200"
  },
  titlewrapper: {
    justifyContent: "flex-start",
    flex: 1,
    paddingTop: 5
  },
  logo: {
    width: 100,
    height: 100,
    tintColor: "white"
  },
  imagecontainer: {
    paddingTop: 100
  },
  buttoncontainer: {
    paddingBottom: 250
  },
  buttonstyle: {
    backgroundColor: "#2c3e50",
    borderRadius: 30,
    width: 150,
    borderColor: "#4ca1af",
    borderWidth: 2
  },
  buttontextcontainer: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "white"
  }
});
