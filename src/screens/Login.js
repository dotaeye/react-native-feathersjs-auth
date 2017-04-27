import React from "react";
import { AppRegistry, Text } from "react-native";

class Login extends React.Component {
  static navigationOptions = {
    title: "Welcome"
  };
  render() {
    return <Text>Hello, Navigation!</Text>;
  }
}

export default Login;
