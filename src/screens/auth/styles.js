import { StyleSheet } from "react-native";
import { color, size } from "../../theme";

const styles = StyleSheet.create({
  topBar: {
    height: 50 + size.statusBar.height,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: size.statusBar.height
  },
  topBarIcon: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginLeft: 5
  },
  header: {
    height: 60,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: 25,
    marginBottom: 20
  },
  headerText: {
    fontSize: size.font.eg,
    color: color.font.title
  },
  form: {
    paddingHorizontal: 25
  },
  formItem: {
    flexDirection: "row",
    height: 40,
    alignItems: "center",
    borderBottomColor: color.border.gray,
    borderBottomWidth: size.border.width,
    marginBottom: 15
  },
  formSubmit: {
    backgroundColor: color.primary,
    borderRadius: 4
  },
  formSubmitDisabled: {
    opacity: 0.4
  },
  input: {
    height: 40,
    flex: 1,
    fontSize: size.font.xs
  },
  submit: {
    height: 40,
    alignItems: "center",
    justifyContent: "center"
  },

  submitText: {
    fontSize: size.font.md,
    color: color.font.white,
    fontWeight: "300"
  },
  links: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    justifyContent: "flex-end"
  },
  linkButton: {
    alignItems: "center",
    justifyContent: "flex-start"
  },
  linkButtonText: {
    fontSize: size.font.xs,
    color: color.primary
  }
});

export default styles;
