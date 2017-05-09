import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  TouchableOpacity
} from "react-native";

class Home extends Component {
  static navigationOptions = {
    title: "Home"
  };

  render() {
    return (
      <View>
        <Text>Home Page</Text>
      </View>
    );
  }
}

export default Home;
