import { StyleSheet } from "react-native";
import { color, size } from "../../theme";

const styles = StyleSheet.create({
  list: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: size.border.width,
    borderTopColor: color.border.gray,
    borderBottomWidth: size.border.width,
    borderBottomColor: color.border.gray
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    height: 40
  },
  itemBottomBorder: {
    borderBottomWidth: size.border.width,
    borderBottomColor: color.border.gray
  },
  text: {
    flex: 1
  },
  arrow: {
    marginRight: 10
  }
});

export default styles;
