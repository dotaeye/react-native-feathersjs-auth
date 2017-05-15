import { StyleSheet } from "react-native";
import color from "./color";
import size from "./size";

const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background.white
  },
  flexDirectionColumn: {
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  flexDirectionRow: {
    flexDirection: "row"
  }
});

const navButton = {
  Back: {
    icon: {
      name: "ios-arrow-back-outline",
      size: size.font.lg,
      color: color.font.body
    },
    text: "返回"
  }
};

module.exports = {
  color,
  size,
  commonStyles,
  navButton
};
