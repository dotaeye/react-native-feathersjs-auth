import React, { PropTypes } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./styles";

const propTypes = {
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  icon: PropTypes.object,
  text: PropTypes.string,
  textButton: PropTypes.bool,
  source: PropTypes.number,
  position: PropTypes.string,
  style: View.propTypes.style,
  containerStyle: View.propTypes.style,
  textStyle: Text.propTypes.style
};

const Button = ({
  onPress,
  disabled,
  icon,
  text,
  source,
  position,
  style,
  containerStyle,
  textStyle
}) => (
  <TouchableOpacity
    style={[
      styles.btnContainer,
      styles["btnPosition" + position],
      containerStyle,
      disabled && styles.btnDisabled
    ]}
    onPress={onPress}
    disabled={disabled}
  >
    {source && <Image style={[styles.btnImg, style]} source={source} />}
    {icon &&
      <Icon
        style={[styles.btnIcon, style, icon && text && { marginRight: 5 }]}
        name={icon.name}
        size={icon.size}
        color={icon.color}
      />}
    {text && <Text style={[styles.btnText, textStyle]}>{text}</Text>}
  </TouchableOpacity>
);

Button.propTypes = propTypes;

Button.defaultProps = {
  onPress() {},
  disabled: false,
  position: "Center"
};

export default Button;
