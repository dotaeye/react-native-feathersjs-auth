import { StyleSheet } from "react-native";
import { color, size } from "../../theme";

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    height: size.navBar.height
  },
  btnPositionLeft: {
    justifyContent: "flex-start"
  },
  btnPositionRight: {
    justifyContent: "flex-end"
  },
  btnPositionCenter: {
    justifyContent: "center"
  },
  btnImg: {},
  btnIcon: {},
  btnText: {
    color: color.font.body
  },
  btnDisabled: {
    opacity: 0.6
  }
});

export default styles;
