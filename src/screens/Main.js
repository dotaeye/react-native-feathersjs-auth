/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  TouchableOpacity
} from "react-native";
import AppIntro from "react-native-app-intro";
import { NavigationActions } from "react-navigation";

const customStyles = {
  paginationContainer: {
    bottom: 80
  },
  dotStyle: {
    backgroundColor: "#D8D8D8",
    width: 10,
    height: 10,
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 5
  },
  activeDotStyle: {
    backgroundColor: "#4A4A4A"
  }
};

class Main extends Component {
  onSkipBtnHandle = index => {
    Alert.alert("Skip");
    console.log(index);
  };
  doneBtnHandle = () => {
    Alert.alert("Done");
  };
  nextBtnHandle = index => {
    Alert.alert("Next");
    console.log(index);
  };
  onSlideChangeHandle = (index, total) => {
    console.log(index, total);
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <AppIntro
          onNextBtnClick={this.nextBtnHandle}
          onDoneBtnClick={this.doneBtnHandle}
          onSkipBtnClick={this.onSkipBtnHandle}
          onSlideChange={this.onSlideChangeHandle}
          customStyles={customStyles}
          showSkipButton={false}
          showDoneButton={false}
        >
          <View style={[styles.slide, { backgroundColor: "#fa931d" }]}>
            <View style={styles.header}>
              <View>
                <Image
                  style={{ width: 75 * 2.5, height: 63 * 2.5 }}
                  source={require("../img/1/c1.png")}
                />
              </View>
              <View
                style={{
                  position: "absolute",
                  top: 80,
                  left: -20
                }}
                level={20}
              >
                <Image
                  style={{ width: 46 * 2.5, height: 28 * 2.5 }}
                  source={require("../img/1/c2.png")}
                />
              </View>
              <View
                style={{
                  position: "absolute",
                  top: 23,
                  left: -25
                }}
                level={20}
              >
                <Image
                  style={{ width: 109 * 2.5, height: 68 * 2.5 }}
                  source={require("../img/1/c5.png")}
                />
              </View>
              <View
                style={{
                  position: "absolute",
                  top: 65,
                  left: -15
                }}
                level={5}
              >
                <Image
                  style={{ width: 23 * 2.5, height: 17 * 2.5 }}
                  source={require("../img/1/c3.png")}
                />
              </View>
            </View>
            <View style={styles.info}>
              <View level={10}><Text style={styles.title}>AppIntro</Text></View>
              <View level={15}>
                <Text style={styles.description}>
                  Pretty Simple Useful in your app tour!
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.slide, { backgroundColor: "#a4b602" }]}>
            <View style={styles.header}>
              <View>
                <Image
                  style={{ width: 75 * 2.5, height: 63 * 2.5 }}
                  source={require("../img/2/1.png")}
                />
              </View>
              <View
                style={{
                  position: "absolute",
                  top: 30,
                  left: -10
                }}
                level={20}
              >
                <Image
                  style={{ width: 101 * 2.5, height: 71 * 2.5 }}
                  source={require("../img/2/2.png")}
                />
              </View>
              <View
                style={{
                  position: "absolute",
                  top: 10,
                  left: 0
                }}
                level={-20}
              >
                <Image
                  style={{ width: 85 * 2.5, height: 73 * 2.5 }}
                  source={require("../img/2/3.png")}
                />
              </View>
            </View>
            <View style={styles.info}>
              <View level={10}><Text style={styles.title}>Title!</Text></View>
              <View level={15}>
                <Text style={styles.description}>description!</Text>
              </View>
            </View>
          </View>
          <View style={[styles.slide, { backgroundColor: "#406E9F" }]}>
            <View style={styles.header}>
              <View
                style={{
                  position: "absolute",
                  top: 20,
                  left: -30
                }}
              >
                <Image
                  style={{ width: 138 * 2.5, height: 83 * 2.5 }}
                  source={require("../img/3/3.png")}
                />
              </View>
              <View
                style={{
                  position: "absolute",
                  top: 25,
                  left: -10
                }}
                level={-15}
              >
                <Image
                  style={{ width: 103 * 2.5, height: 42 * 2.5 }}
                  source={require("../img/3/4.png")}
                />
              </View>
              <View level={10}>
                <Image
                  style={{ width: 95 * 2.5, height: 55 * 2.5 }}
                  source={require("../img/3/1.png")}
                />
              </View>
              <View
                style={{
                  position: "absolute",
                  top: 65,
                  left: 70
                }}
                level={25}
              >
                <Image
                  style={{ width: 47 * 2.5, height: 43 * 2.5 }}
                  source={require("../img/3/2.png")}
                />
              </View>
            </View>
            <View style={styles.info}>
              <View level={10}><Text style={styles.title}>Title!</Text></View>
              <View level={15}>
                <Text style={styles.description}>description!</Text>
              </View>
            </View>
          </View>
          <View style={[styles.slide, { backgroundColor: "#DB4302" }]}>
            <View style={styles.header}>
              <View
                style={{
                  position: "absolute",
                  top: 25,
                  left: -35
                }}
                level={15}
              >
                <Image
                  style={{ width: 96 * 2.5, height: 69 * 2.5 }}
                  source={require("../img/4/4.png")}
                />
              </View>
              <View>
                <Image
                  style={{ width: 50 * 2.5, height: 63 * 2.5 }}
                  source={require("../img/4/1.png")}
                />
              </View>
              <View
                style={{
                  position: "absolute",
                  top: 20,
                  left: 0
                }}
                level={20}
              >
                <Image
                  style={{ width: 46 * 2.5, height: 98 * 2.5 }}
                  source={require("../img/4/3.png")}
                />
              </View>
            </View>
            <View style={styles.info}>
              <View level={10}><Text style={styles.title}>Title!</Text></View>
              <View level={15}>
                <Text style={styles.description}>description!</Text>
              </View>
            </View>
          </View>
        </AppIntro>
        <View style={styles.footer}>
          <TouchableOpacity
            style={[styles.button, styles.buttonPrimary, { marginRight: "7%" }]}
            onPress={() =>
              navigation.dispatch(
                NavigationActions.navigate({
                  routeName: "Login"
                })
              )}
          >
            <Text style={styles.buttonPrimaryText}>登录</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonGhost]}
            onPress={() =>
              navigation.dispatch(
                NavigationActions.navigate({
                  routeName: "Register"
                })
              )}
          >
            <Text style={styles.buttonGhostText}>注册</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  footer: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    height: 60,
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent"
  },
  button: {
    height: 40,
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4
  },
  buttonPrimary: {
    backgroundColor: "rgb(29,175,231)"
  },
  buttonPrimaryText: {
    color: "#fff"
  },
  buttonGhost: {
    backgroundColor: "#fff",
    borderColor: "rgb(29,175,231)",
    borderWidth: 1
  },
  buttonGhostText: {
    color: "rgb(29,175,231)"
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
    padding: 15
  },
  header: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center"
  },
  pic: {
    width: 75 * 2,
    height: 63 * 2
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  },
  info: {
    flex: 0.5,
    alignItems: "center",
    padding: 40
  },
  title: {
    color: "#fff",
    fontSize: 30,
    paddingBottom: 20
  },
  description: {
    color: "#fff",
    fontSize: 20
  }
});

export default Main;
