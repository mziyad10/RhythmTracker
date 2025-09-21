import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

export default function Index() {
  const {signOut} = useAuth()
  return (
    <View style={styles.View}>
      <Text>ahyhb</Text>
      <Button mode="text" onPress={signOut} icon={"logout"}>Sign out</Button>
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
