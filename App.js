import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Button} from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import OtpPage from './app/screens/OtpPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './app/screens/HomePage';


const Stack = createStackNavigator();

const App = () => {
  return (

 <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={WelcomeScreen} />
          <Stack.Screen name="OTP" component={OtpPage} />
          <Stack.Screen name="Home" component={HomePage} options={({ navigation}) => ({
            headerRight: () => (
              <TouchableOpacity 
                  style={styles.signOutButton} 
                  onPress={() => navigation.replace('Login')}
              >
                  <Text style={styles.signOutText}>Sign Out</Text>
              </TouchableOpacity>
          ),
      })}
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
      color: 'tomato',
      fontSize: 16,
      
  },
});

export default App;