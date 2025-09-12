import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.View}>
      <Text>ahyhb</Text>
      <Link href="/login" style={styles.navButton}>
        {" "}
        Login page{" "}
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  View: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  navButton: {
    width: 100,
    height: 20,
    backgroundColor: "coral",
    borderRadius: 8,
    textAlign: "center",
  },
});
