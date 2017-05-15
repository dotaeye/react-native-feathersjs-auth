import React, { Component } from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import { color, size } from "../../theme";

const Item = ({
  icon,
  title,
  arrow,
  bordered,
  onPress = () => {},
  children,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles.item, bordered && styles.itemBottomBorder]}
      onPress={onPress}
      {...props}
    >
      {icon && <Icon {...icon} />}
      {title && <Text style={styles.text}>{title}</Text>}
      {children !== undefined && children}
      {arrow &&
        <Icon
          style={styles.arrow}
          name="ios-arrow-forward"
          size={size.font.lg}
          color={color.font.tip}
        />}
    </TouchableOpacity>
  );
};

export default Item;
