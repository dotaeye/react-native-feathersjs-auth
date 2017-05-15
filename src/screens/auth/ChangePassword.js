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
import { createForm } from "rc-form";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { NavigationActions } from "react-navigation";
import * as authActions from "../../actions/auth";
import { commonStyles, size, color, navButton } from "../../theme";
import Navbar from "../../components/Navbar";
import Input from "../../components/Input";
import List from "../../components/List";
import { getValidErrorMessage } from "../../utils/Validator";
import Message from "../../utils/Message";
import styles from "./styles";

class ChangePassword extends Component {
  static navigationOptions = {
    title: "更改密码"
  };

  componentWillMount() {
    const passwordRule = {
      required: true,
      pattern: /^[\w\W]{6,18}$/,
      message: "请输入6~18位密码不包含空格!"
    };
    this.oldPasswordDecorator = this.props.form.getFieldDecorator(
      "oldPassword",
      {
        rules: [passwordRule]
      }
    );
    this.passwordDecorator = this.props.form.getFieldDecorator("password", {
      rules: [passwordRule]
    });
    this.confirmPasswordDecorator = this.props.form.getFieldDecorator(
      "confirmPassword",
      {
        rules: [
          passwordRule,
          (rule, value, callback) => {
            const form = this.props.form;
            if (value && value !== form.getFieldValue("password")) {
              callback("两次密码不一致!");
            } else {
              callback();
            }
          }
        ]
      }
    );
  }

  onChangePassword() {
    this.props.form.validateFields((error, value) => {
      console.log(error, value);
      if (error) {
        Message.error(getValidErrorMessage(error));
      } else {
        this.props.authActions.changePassword({
          data: {
            strategy: "local",
            ...value
          }
        });
      }
    });
  }

  render() {
    const { dispatch } = this.props.navigation;
    const nav = {
      Left: [
        {
          onPress: () => dispatch(NavigationActions.back()),
          ...navButton.Back
        }
      ],
      Right: [
        {
          text: "完成",
          onPress: this.onChangePassword.bind(this)
        }
      ]
    };
    return (
      <View style={[commonStyles.container, commonStyles.flexDirectionColumn]}>
        <Navbar nav={nav}>
          <Text>更改密码</Text>
        </Navbar>
        <List style={{ marginTop: 10 }}>
          <List.Item bordered>
            {this.oldPasswordDecorator(
              <Input
                style={styles.input}
                placeholder={"旧密码"}
                underlineColorAndroid={"transparent"}
                secureTextEntry={true}
                autoCapitalize={"none"}
                autoCorrect={false}
              />
            )}
          </List.Item>
          <List.Item bordered>
            {this.passwordDecorator(
              <Input
                style={styles.input}
                placeholder={"新密码"}
                underlineColorAndroid={"transparent"}
                secureTextEntry={true}
                autoCapitalize={"none"}
                autoCorrect={false}
              />
            )}
          </List.Item>
          <List.Item>
            {this.confirmPasswordDecorator(
              <Input
                style={styles.input}
                placeholder={"确认密码"}
                underlineColorAndroid={"transparent"}
                secureTextEntry={true}
                autoCapitalize={"none"}
                autoCorrect={false}
              />
            )}
          </List.Item>
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

ChangePassword = createForm()(ChangePassword);

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);
