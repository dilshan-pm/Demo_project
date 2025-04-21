import { StyleSheet, Text, TouchableOpacity } from "react-native";
import LoginScreen from "./app/screens/LoginScreen";
import OtpPage from "./app/screens/OtpPage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "./app/screens/HomePage";
import AuthPage from "./app/screens/authPage";
import SplashScreen from "./app/screens/SplashScreen";
import ScannerScreen from "./app/screens/ScannerScreen";
import FoundScreen from "./app/screens/ContactScreen";

const Stack = createStackNavigator();

const linking = {
  prefixes: ["http://192.168.1.40:3000"],
  config: {
    screens: {
      Splash: "",
      Login: "Login",
      OTP: "otp",
      auth: "Authentication",
      Home: "home",
      Scanner: "Scanner",
      Found: "Found",
    },
  },
};

const App = () => {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OTP"
          component={OtpPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="auth"
          component={AuthPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Scanner"
          component={ScannerScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Found"
          component={FoundScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  signOutButton: {
    marginRight: 10,
  },
  signOutText: {
    color: "tomato",
    fontSize: 16,
  },
});

export default App;
