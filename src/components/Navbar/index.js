import React, { Component } from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import Button from "../Button";
import styles from "./styles";

const positions = ["Left", "Center", "Right"];

const NavBar = ({ nav = {}, style, children }) => {
  return (
    <View style={[styles.navBarContainer, style]}>
      {positions.map(position => {
        // 中间部分直接返回
        if (position === "Center" && children) {
          return (
            <View
              key={position}
              style={[styles.navBarPart, styles["navBarPart" + position]]}
            >
              {children}
            </View>
          );
        }
        const navPart = nav[position];
        if (navPart && Array.isArray(navPart)) {
          return (
            <View
              key={position}
              style={[styles.navBarPart, styles["navBarPart" + position]]}
            >
              {navPart.map((nav, navIndex) => {
                const { View, title, ...props } = nav;
                if (View) {
                  return View;
                } else if (title) {
                  return (
                    <Text style={styles.navBarTitle} key={navIndex}>
                      {nav.title}
                    </Text>
                  );
                } else {
                  return (
                    <Button key={navIndex} position={position} {...props} />
                  );
                }
              })}
            </View>
          );
        }
        return null;
      })}
    </View>
  );
};

export default NavBar;
