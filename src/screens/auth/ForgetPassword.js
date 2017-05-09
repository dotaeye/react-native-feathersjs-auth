import React from "react";
import { View, Text, TouchableOpacity, TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { createForm } from "rc-form";
import Input from "../../components/Input";
import * as authActions from "../../actions/auth";
import { commonStyles, color, size } from "../../theme";
import { VERIFICATION_STATUS } from "../../configs";
import SmsButton from "../../components/SmsButton";
import { validPhone, invalidForm } from "../../utils/Validator";
import styles from "./styles";

class ForgetPassword extends React.Component {
  static navigationOptions = {
    title: "ForgetPassword"
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
    this.codeDecorator = this.props.form.getFieldDecorator("code", {
      rules: [
        {
          required: true,
          pattern: /\d{6}/,
          message: "请输入六位数验证码!"
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

  onGetSmsCode(value) {
    this.props.authActions.verificationCode({
      phone: value,
      codeType: VERIFICATION_STATUS.FORGET
    });
  }

  onSubmit(isInvalid) {
    if (isInvalid) return;
    const { navigate } = this.props.navigation;
    this.props.form.validateFields((error, value) => {
      console.log(error, value);
      this.props.authActions.forgetPassword({
        success: () => {
          navigate("Login");
        },
        fail: err => {
          console.log(err);
        },
        data: {
          action: "forgetPassword",
          ...value
        }
      });
    });
  }

  render() {
    const { goBack } = this.props.navigation;
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
          <Text style={styles.headerText}>忘记密码</Text>
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
            <SmsButton
              telephone={getFieldValue("phone")}
              interval={60}
              onGetSmsCode={this.onGetSmsCode.bind(this)}
            />
          </View>
          <View style={styles.formItem}>
            {this.codeDecorator(
              <Input
                style={styles.input}
                placeholder={"输入短信验证码"}
                underlineColorAndroid={"transparent"}
                autoCapitalize={"none"}
                autoCorrect={false}
                keyboardType={"numeric"}
                maxLength={6}
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
              <Text style={styles.submitText}>重置</Text>
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

ForgetPassword = createForm()(ForgetPassword);

export default connect(mapStateToProps, mapDispatchToProps)(ForgetPassword);
