import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import OtpPage from "./app/screens/OtpPage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "./app/screens/HomePage";
import AuthPage from "./app/screens/authPage";
import SplashScreen from "./app/screens/SplashScreen";
import ScannerScreen from "./app/screens/ScannerScreen";
import HistoryScreen from "./app/screens/ContactScreen";

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
      History: "History",

    },
  },
};

const App = () => {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={WelcomeScreen} />
        <Stack.Screen name="OTP" component={OtpPage} />
        <Stack.Screen name="auth" component={AuthPage} />
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={({ navigation }) => ({
            headerRight: () => (
              <TouchableOpacity
                style={styles.signOutButton}
                onPress={() => navigation.replace("Login")}
              >
                <Text style={styles.signOutText}>Sign Out</Text>
              </TouchableOpacity>
            ),
          })}
        />
         <Stack.Screen name="Scanner" 
         component={ScannerScreen} 
         options={({ navigation }) => ({
          headerRight: () => (
            <TouchableOpacity
              style={styles.signOutButton}
              onPress={() => navigation.replace("Login")}
            >
              <Text style={styles.signOutText}>Sign Out</Text>
            </TouchableOpacity>
          ),
        })}/>
        <Stack.Screen name="History" 
         component={HistoryScreen} 
         options={({ navigation }) => ({
          headerRight: () => (
            <TouchableOpacity
              style={styles.signOutButton}
              onPress={() => navigation.replace("Login")}
            >
              <Text style={styles.signOutText}>Sign Out</Text>
            </TouchableOpacity>
          ),
        })}/>
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
