import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";
import { testPhone } from "../../utils/Validator";
import styles from "./styles";

class SmsButton extends Component {
  static defaultProps = {
    interval: 60,
    telephone: ""
  };

  state = {
    intervalSecond: 0,
    disabled: true
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      disabled: !testPhone(nextProps.telephone)
    });
  }

  componentWillUnmount() {
    this.timer && clearInterval(this.timer);
  }

  onGetSmsCode() {
    const { disabled, intervalSecond } = this.state;
    if (intervalSecond > 0 || disabled) return;
    this.setState(
      {
        intervalSecond: this.props.interval
      },
      () => {
        this.props.onGetSmsCode(this.props.telephone);
        this.timer = setInterval(() => {
          if (this.state.intervalSecond === 0) {
            clearInterval(this.timer);
          } else {
            this.setState({
              intervalSecond: this.state.intervalSecond - 1
            });
          }
        }, 1000);
      }
    );
  }

  render() {
    const { intervalSecond, disabled } = this.state;
    return (
      <TouchableOpacity
        style={[styles.smsButton]}
        onPress={this.onGetSmsCode.bind(this)}
      >
        <Text
          style={[
            styles.smsButtonText,
            (intervalSecond > 0 || disabled) && styles.smsButtonDisabled
          ]}
        >
          {intervalSecond === 0 ? "获取手机验证码" : `${intervalSecond}秒后再次获取`}
        </Text>
      </TouchableOpacity>
    );
  }
}
export default SmsButton;
