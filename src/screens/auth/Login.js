import React from "react";
import { View, Text, TouchableOpacity, TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { createForm } from "rc-form";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Input from "../../components/Input";
import * as authActions from "../../actions/auth";
import { commonStyles, color, size } from "../../theme";
import { validPhone, invalidForm } from "../../utils/Validator";
import styles from "./styles";

class Login extends React.Component {
  static navigationOptions = {
    title: "Login"
  };

  state = {
    showPassword: false
  };

  componentWillMount() {
    this.phoneDecorator = this.props.form.getFieldDecorator("phone", {
      rules: [
        {
          required: true,
          validator: validPhone
        }
      ]
    });
    this.passwordDecorator = this.props.form.getFieldDecorator("password", {
      rules: [
        {
          required: true,
          pattern: /^[\w\W]{6,18}$/,
          message: "请输入6~18位密码不包含空格!"
        }
      ]
    });
  }

  componentDidMount() {
    this.props.form.validateFields();
  }

  onSubmit(isInvalid) {
    if (isInvalid) return;
    const { navigate } = this.props.navigation;
    this.props.form.validateFields((error, value) => {
      console.log(error, value);
      this.props.authActions.login({
        success: () => {
          navigate("Home");
          console.log("login success");
        },
        fail: err => {
          console.log(err);
        },
        data: {
          strategy: "local",
          type: "password",
          ...value
        }
      });
    });
  }

  render() {
    const { goBack, navigate } = this.props.navigation;
    const {
      getFieldDecorator,
      getFieldValue,
      getFieldsError
    } = this.props.form;
    const isInvalid = invalidForm(getFieldsError());
    return (
      <View style={[commonStyles.container, commonStyles.flexDirectionColumn]}>
        <View style={styles.topBar}>
          <TouchableOpacity style={styles.topBarIcon} onPress={() => goBack()}>
            <Icon
              name="ios-arrow-back-outline"
              size={size.icon.md}
              color={color.font.tip}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.header}>
          <Text style={styles.headerText}>欢迎登录</Text>
        </View>
        <View
          style={[
            commonStyles.container,
            commonStyles.flexDirectionColumn,
            styles.form
          ]}
        >
          <View style={styles.formItem}>
            {this.phoneDecorator(
              <Input
                style={styles.input}
                placeholder={"输入手机号码"}
                underlineColorAndroid={"transparent"}
                autoCapitalize={"none"}
                autoCorrect={false}
                keyboardType={"numeric"}
                maxLength={11}
              />
            )}
          </View>
          <View style={styles.formItem}>
            {this.passwordDecorator(
              <Input
                style={styles.input}
                placeholder={"6~18位密码不包含空格"}
                underlineColorAndroid={"transparent"}
                secureTextEntry={!this.state.showPassword}
                autoCapitalize={"none"}
                autoCorrect={false}
              />
            )}
            <TouchableOpacity
              style={{ paddingHorizontal: 5, paddingVertical: 8 }}
              onPress={() => {
                this.setState({
                  showPassword: !this.state.showPassword
                });
              }}
            >
              {this.state.showPassword
                ? <Icon name="md-eye" size={24} color={color.primary} />
                : <Icon name="md-eye-off" size={24} color={color.primary} />}
            </TouchableOpacity>
          </View>
          <View
            style={[styles.formSubmit, isInvalid && styles.formSubmitDisabled]}
          >
            <TouchableOpacity
              style={styles.submit}
              onPress={this.onSubmit.bind(this, isInvalid)}
            >
              <Text style={styles.submitText}>登录</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.links, { justifyContent: "space-between" }]}>
            <TouchableOpacity
              style={styles.linkButton}
              onPress={() => navigate("CodeLogin")}
            >
              <Text style={styles.linkButtonText}>使用验证码登录</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.linkButton}
              onPress={() => navigate("ForgetPassword")}
            >
              <Text style={styles.linkButtonText}>忘记密码</Text>
            </TouchableOpacity>
          </View>
        </View>
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

Login = createForm()(Login);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
