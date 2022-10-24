import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";

export default function Screen({ children, screenStyle }) {
  return (
    <View style={styles.container} className={screenStyle}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
  },
});
