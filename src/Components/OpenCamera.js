import React, { Component } from "react";

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  View,
  Image,
  Alert,
  StatusBar,
  Vibration
} from "react-native";
import { RNCamera } from "react-native-camera";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Images from "./Images.js";
import { whileStatement, variableDeclaration } from "@babel/types";
import Splash from "./Splash";
import ResultPage from "./ResultPage";

export default class OpenCamera extends Component {
  static navigationOptions = {
    headerTransparent: true,
    headerMode: "none",
    headerLeft: null
  };
  constructor(props) {
    super(props);
    isBarcodeRead = false;
    this.state = { count: 0, scaned: 1 };
  }
  screentouch = () => {
    this.setState({
      scaned: 0
    });
  };

  onPressflash = () => {
    this.state.count == 0
      ? this.setState({
          count: this.state.count + 1
        })
      : this.setState({
          count: this.state.count - 1
        });
  };

  onBarCodeRead = barcodes => {
    const barval = barcodes.data;

    Vibration.vibrate(400);
    this.setState({
      scaned: 1
    });
    this.props.navigation.navigate("Result", {
      barvalue: barval
    });
  };
  render() {
    return (
      <RNCamera
        flashMode={
          this.state.count == 0
            ? RNCamera.Constants.FlashMode.off
            : RNCamera.Constants.FlashMode.torch
        }
        onBarCodeRead={this.state.scaned == 0 ? this.onBarCodeRead : null}
        ref={ref => {
          this.camera = ref;
        }}
        style={{
          flex: 1,
          width: "100%"
        }}
      >
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <View>
          <View style={styles.totalcontainer}>
            <View style={styles.titleholder}>
              <Text style={styles.title}>Touch the QR</Text>
            </View>
            <View style={styles.buttonTouchable}>
              <TouchableOpacity
                style={styles.Flashbutton}
                onPress={this.onPressflash}
              >
                <Image style={styles.flashstyle} source={Images.FlashLogo} />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <TouchableOpacity
              style={styles.touchscreen}
              onPress={this.screentouch}
            ></TouchableOpacity>
          </View>
        </View>
      </RNCamera>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontWeight: "500",
    color: "#000"
  },
  titleholder: {
    alignItems: "flex-start",
    justifyContent: "center"
  },
  totalcontainer: {
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    backgroundColor: "#2c3e50",
    paddingTop: 5,
    paddingBottom: 5
  },
  instructions: {
    fontSize: 21,
    color: "rgb(0,122,255)"
  },
  buttonTouchable: {
    alignItems: "center",
    justifyContent: "center"
  },
  flashstyle: {
    width: 20,
    height: 20,
    tintColor: "white"
  },
  title: {
    color: "white",
    fontWeight: "300",
    fontSize: 20
  },
  touchscreen: {
    width: "100%",
    height: "100%"
  },
  textColor: {
    color: "white"
  }
});
