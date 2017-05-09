import React from "react";
import { TextInput } from "react-native";
import styles from "./styles";

export default class Input extends React.Component {
  onChange(text) {
    const { onChange } = this.props;
    if (onChange) {
      onChange(text);
    }
  }

  render() {
    const {
      style,
      onChange, // eslint ignore line
      ...props
    } = this.props;
    return (
      <TextInput
        style={[styles.input, style]}
        onChange={event => this.onChange(event.nativeEvent.text)}
        {...props}
      />
    );
  }
}
