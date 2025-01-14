import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button} from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import OtpPage from './app/screens/OtpPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const App = () => {
  return (

  <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={WelcomeScreen} />
          <Stack.Screen name="OTP" component={OtpPage} />
        </Stack.Navigator>
      </NavigationContainer>
    );
};

export default App;

