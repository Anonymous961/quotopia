import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      initialRouteName="index"
      // https://reactnavigation.org/docs/headers#sharing-common-options-across-screens
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="index" options={{}} />
    </Stack>
  );
}
