import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Platform, SafeAreaView, Image, TouchableOpacity, Alert } from 'react-native';


function WelcomeScreen({ navigation }) {
  const [mobileNumber, setMobileNumber] = useState('');
  const handleSignIn = () => {
      if (mobileNumber.length === 10) {
          navigation.replace('OTP');
      } else {
          if (Platform.OS === 'web') {
              alert('Invalid Mobile Number. Please enter a valid 10-digit mobile number.');
          } else {
              Alert.alert('Invalid Mobile Number', 'Please enter a valid 10-digit mobile number.');
          }
      }
  };
  

    return (
        <SafeAreaView style={styles.container}>
            <Image 
                source={require('../assets/mobile.png')} 
                style={styles.logo} 
            />
            <Text style={styles.heading}>
                Verify your Mobile Number
            </Text>
            <Text style={styles.subheading}>
                Please enter your details to sign in
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Mobile Number"
                keyboardType="numeric"
                maxLength={10}
                value={mobileNumber}
                onChangeText={setMobileNumber}
            />
            <TouchableOpacity 
                style={styles.Button}
                onPress={handleSignIn}>
                <Text style={styles.signInText}>Sign in</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  logo: {
      width: 50,
      height: 55,
      bottom: 20,
  },
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  heading: {
      fontSize: 25,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    subheading: {
      fontSize: 14,
      color: '#555',
      marginBottom: 20,
    },
  input: {
      width: '89%',
      height: 50,
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 5,
      paddingHorizontal: 10,
      bottom: 10,
    },
  Button: {
      width: '89%',
      height: 45,
      borderRadius: 7,
      backgroundColor: '#333',
      justifyContent: 'center',
      alignItems: 'center',
      top: 2,
    },
    signInText: {
      color: '#fff',
      fontWeight: 'bold',
    },
});

export default WelcomeScreen;
