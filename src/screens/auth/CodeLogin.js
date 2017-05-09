import React from "react";
import { View, Text, TouchableOpacity, TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { createForm } from "rc-form";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Input from "../../components/Input";
import * as authActions from "../../actions/auth";
import { commonStyles, color, size } from "../../theme";
import { VERIFICATION_STATUS } from "../../configs";
import SmsButton from "../../components/SmsButton";
import { validPhone, invalidForm } from "../../utils/Validator";
import styles from "./styles";

class CodeLogin extends React.Component {
  static navigationOptions = {
    title: "CodeLogin"
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
    this.codeDecorator = this.props.form.getFieldDecorator("password", {
      rules: [
        {
          required: true,
          pattern: /\d{6}/,
          message: "请输入六位数验证码!"
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
          console.log("login success");
          navigate("Home");
        },
        fail: err => {
          console.log(err);
        },
        data: {
          strategy: "local",
          ...value
        }
      });
    });
  }

  onGetSmsCode(value) {
    this.props.authActions.verificationCode({
      phone: value,
      codeType: VERIFICATION_STATUS.LOGIN
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
          <Text style={styles.headerText}>短信验证码登录</Text>
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
          <View style={styles.links}>
            <TouchableOpacity style={styles.linkButton}>
              <Text style={styles.linkButtonText}>使用密码登录</Text>
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

CodeLogin = createForm()(CodeLogin);

export default connect(mapStateToProps, mapDispatchToProps)(CodeLogin);
