import { StatusBar, StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          {/* {screens} */}
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
        <StatusBar
          animated={true}
          backgroundColor="#f3f4f6"
          barStyle="dark-content"
        />
      </TailwindProvider>
    </NavigationContainer>
  );
}
