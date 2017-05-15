import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { commonStyles, size } from "../../theme";
import Navbar from "../../components/Navbar";

class Home extends Component {
  static navigationOptions = {
    tabBarLabel: "Home",
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Icon name={"ios-home"} size={size.font.max} color={tintColor} />
    )
  };

  render() {
    return (
      <View style={[commonStyles.container, commonStyles.flexDirectionColumn]}>
        <Navbar>
          <Text>首页</Text>
        </Navbar>
        <Text>Home Page</Text>
      </View>
    );
  }
}

export default Home;
