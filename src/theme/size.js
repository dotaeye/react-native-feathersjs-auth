import { PixelRatio, Platform, Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export default {
  getPercent: (width, percent) => {
    return width * percent / 100;
  },
  border: {
    width: StyleSheet.hairlineWidth,
    radius: 2
  },

  navBar: {
    height: 44
  },

  statusBar: {
    height: Platform.OS === "ios" ? 20 : 0,
    hacker: Platform.OS === "ios" ? 0 : 25
  },

  window: {
    height: height,
    width: width
  },

  font: {
    max: 30,
    eg: 24,
    lg: 20,
    md: 18,
    sm: 16,
    xs: 14,
    ms: 12,
    min: 10
  },

  space: {
    eg: 30,
    lg: 25,
    md: 20,
    sm: 15,
    xs: 10,
    ms: 5,
    min: 0
  },

  lineHeight: {
    lg: 36,
    md: 26,
    sm: 24
  },

  icon: {
    lg: 36,
    md: 22
  },

  avatar: {
    lg: 60,
    sm: 20
  }
};
