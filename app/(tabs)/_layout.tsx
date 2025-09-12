import { Stack } from "expo-router";

export default function tabLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="login" options={{ title: "Login" }} />
    </Stack>
  );
}
