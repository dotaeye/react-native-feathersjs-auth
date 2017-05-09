import { StyleSheet } from "react-native";
import { color, size } from "../../theme";

const styles = StyleSheet.create({
  smsButton: {
    borderLeftColor: color.border.gray,
    borderLeftWidth: size.border.width,
    paddingLeft: 10
  },
  smsButtonText: {
    color: color.primary,
    fontSize: size.font.ms
  },
  smsButtonDisabled: {
    color: color.font.tip
  }
});

export default styles;
