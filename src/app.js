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
import { NavigationActions } from "react-navigation";
import Client from "./utils/Client";
import * as socketActions from "./actions/socket";
import Navigator from "./navigator";
import Storage from "./utils/Storage";
import { STORAGE } from "./configs";

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

  state = {
    initialized: false,
    login: false
  };

  async componentDidMount() {
    let mainPage = "Main";
    try {
      const auth = await Client.authenticate();
      mainPage = "Home";
    } catch (err) {
      console.log(err);
    }
    console.log(mainPage);
    this.props.initRoute(mainPage);
    this.setState({ initialized: true }, () => {
      SplashScreen.hide();
    });
  }

  render() {
    const { initialized } = this.state;
    if (!initialized) return null;
    return <Navigator />;
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
    socketActions: bindActionCreators(socketActions, dispatch),
    initRoute: routeName =>
      dispatch(
        NavigationActions.navigate({
          routeName
        })
      )
  }),
  null,
  {
    withRef: true
  }
)(App);
