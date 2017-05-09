import { StyleSheet } from "react-native";
import color from "./color";
import size from "./size";

const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background.white
  },
  flexDirectionColumn: {
    flexDirection: "column"
  },
  flexDirectionRow: {
    flexDirection: "row"
  }
});

module.exports = {
  color,
  size,
  commonStyles
};
