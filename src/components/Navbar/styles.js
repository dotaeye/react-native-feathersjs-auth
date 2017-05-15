import { StyleSheet } from "react-native";
import { color, size } from "../../theme";

const styles = StyleSheet.create({
  navBarContainer: {
    height: size.navBar.height + size.statusBar.height,
    width: size.window.width,
    backgroundColor: color.background.white,
    borderBottomWidth: size.border.width,
    borderBottomColor: color.border.gray,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: size.statusBar.height
  },

  navBarTitle: {
    fontSize: size.font.md,
    color: color.font.body
  },

  navBarPart: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: size.navBar.height
  },

  navBarPartRight: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end"
  },

  navBarPartLeft: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start"
  },

  navBarPartCenter: {
    flex: 2
  }
});

export default styles;
