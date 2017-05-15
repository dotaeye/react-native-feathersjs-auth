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
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { NavigationActions } from "react-navigation";
import { commonStyles, size } from "../../theme";
import * as authActions from "../../actions/auth";
import Navbar from "../../components/Navbar";
import List from "../../components/List";

class Setting extends Component {
  static navigationOptions = {
    tabBarLabel: "Setting",
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Icon name={"ios-settings"} size={size.font.max} color={tintColor} />
    )
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={[commonStyles.container, commonStyles.flexDirectionColumn]}>
        <Navbar>
          <Text>设置</Text>
        </Navbar>
        <List style={{ marginTop: 10 }}>
          <List.Item
            title="修改密码"
            onPress={() => {
              navigation.dispatch(
                NavigationActions.navigate({
                  routeName: "ChangePassword"
                })
              );
            }}
            arrow
          />
        </List>
        <List style={{ marginTop: 10 }}>
          <List.Item
            title="退出登录"
            onPress={() => {
              this.props.authActions.logout();
            }}
          />
        </List>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    authActions: bindActionCreators(authActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Setting);
