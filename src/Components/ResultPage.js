import React, { Component } from "react";
import LinearGradient from "react-native-linear-gradient";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage,
  Alert,
  YellowBox
} from "react-native";
import { db } from "./db";
YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader"
]);
export const addItem = item => {
  db.ref("/items").push({
    name: item
  });
};
export default class ResultPage extends Component {
  static navigationOptions = {
    headerTransparent: true,
    headerMode: "none",
    headerLeft: null
  };
  savedetails = () => {
    const { navigation } = this.props;
    addItem(navigation.getParam("barvalue", "default value"));
    Alert.alert("Item saved successfully");
  };

  render() {
    const { navigation } = this.props;
    const data = navigation.getParam("barvalue", "default value");
    const dataarray = data.split("\r\n" || ";");

    return (
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#2c3e50", "#4ca1af"]}
        style={styles.linearGradient}
      >
        <View style={styles.total}>
          <View style={styles.datacontainer}>
            <View style={styles.headercontainer}>
              <Text style={styles.headertext}>Content</Text>
            </View>
            {dataarray.map((item, key) => (
              <Text key={key} style={styles.TextStyle}>
                {item}
              </Text>
            ))}
          </View>
          <View style={styles.allbutton}>
            <TouchableOpacity
              style={styles.buttonstyle}
              onPress={() => this.props.navigation.navigate("Details")}
            >
              <Text style={styles.buttontext}>Go Back To scan</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonstyle}
              onPress={this.savedetails}
            >
              <Text style={styles.buttontext}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonstyle}
              onPress={() => this.props.navigation.navigate("ShowResult")}
            >
              <Text style={styles.buttontext}>Open Saved</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1
  },
  total: {
    flex: 1
  },
  datacontainer: {
    flex: 2,
    backgroundColor: "white"
  },
  headercontainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  headertext: {
    fontWeight: "500",
    fontSize: 20,
    color: "black"
  },
  buttonstyle: {
    backgroundColor: "#2c3e50",
    borderRadius: 30,
    width: 150,
    height: 60,
    borderColor: "#4ca1af",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center"
  },
  buttontext: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    color: "white"
  },
  allbutton: {
    flex: 2,
    alignItems: "center",
    justifyContent: "space-around"
  }
});
