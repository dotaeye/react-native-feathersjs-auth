import React, { Component } from "react";
import { View, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import Item from "./Item";

const List = ({ style, children }) => {
  return <View style={[styles.list, style]}>{children}</View>;
};

List.Item = Item;

export default List;
