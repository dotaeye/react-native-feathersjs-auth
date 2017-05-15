import { View, ActivityIndicator } from "react-native";

const Loading = () => (
  <View
    style={{
      alignItems: "center",
      justifyContent: "center",
      flex: 1
    }}
  >
    <ActivityIndicator />
  </View>
);
