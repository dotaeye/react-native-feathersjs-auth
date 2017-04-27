/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import SplashScreen from "react-native-splash-screen";
import { StackNavigator } from "react-navigation";
import Client from "./utils/Client";
import * as socketActions from "./actions/socket";
import { Main } from "./screens";

const MainNavigator = StackNavigator(
  {
    Main: { screen: Main }
  },
  { mode: "modal", headerMode: "none" }
);

class App extends Component {
  constructor(props) {
    super(props);
    Client.io.on("connect", () => {
      this.props.socketActions.connect();
    });
    Client.io.on("disconnect", () => {
      this.props.socketActions.disconnect();
    });
  }

  componentDidMount() {
    // do anything while splash screen keeps, use await to wait for an async task.
    SplashScreen.hide();
  }
  render() {
    return <MainNavigator />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});

export default connect(
  (state, props) => ({
    socket: state.socket
  }),
  dispatch => ({
    socketActions: bindActionCreators(socketActions, dispatch)
  }),
  null,
  {
    withRef: true
  }
)(App);
