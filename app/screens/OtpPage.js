import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform, Alert } from 'react-native';

const OtpPage = ({ navigation, route }) => {
    const [otp, setOtp] = useState('');
    const { mobileNumber } = route.params; 

  
    const handleSubmit = () => {
      if (otp.length < 6) {
          if (Platform.OS === 'web') {
            alert('Invalid OTP. Please enter a valid 6-digit OTP.');
              } 
              else {
            Alert.alert('Invalid OTP', 'Please enter a valid 6-digit OTP.');
          }
        }
      else {
        navigation.replace('auth', { otp });
       }
      }

  return (
      <View style={styles.container}>
          <Text style={styles.heading}>Verify Phone</Text>
          <Text style={styles.subheading}>
              Please enter the OTP sent to your Mobile Number: {mobileNumber}
          </Text>
          <TextInput
              style={styles.input}
              placeholder="Enter OTP"
              keyboardType="numeric"
              value={otp}
              maxLength={6}
              onChangeText={setOtp}
          />
          <View style={styles.ButtonContainer}>
              <TouchableOpacity
                  style={styles.Button}
                  onPress={() => navigation.replace('Login')} // Go back to the previous screen
              >
                  <Text style={styles.backButton}>Go Back</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.verifyButton} onPress={handleSubmit}>
                  <Text style={styles.verifyText}>Verify</Text>
              </TouchableOpacity>
          </View>
      </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ButtonContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 25,
    },
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      bottom: 7,
    },
    subheading: {
      fontSize: 14,
      color: '#555',
      marginBottom: 5,
      textAlign: 'center',
    },
    input: {
        height: 40,
        borderRadius: 5,
        borderColor: '#ccc',
        borderWidth: 1,
        width: '90%',
        padding: 10,
        top: 20,
    },
    backButton: {
      fontSize: 14,
      color: '#444',
    },
    Button: {

      height: 45,
      borderRadius: 5,
      borderColor: '#ddd',
      borderWidth: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      
      right: 3,
      width: Platform.OS === 'ios'? '50%' : Platform.OS === 'android'?'50%': '250%'
    },
    verifyButton: {
      width: Platform.OS === 'ios'? '50%' : Platform.OS === 'android'?'50%': '250%',
      height: 45,
      backgroundColor: '#333',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      left: 3
  },
    verifyText: {
      color: '#ffffff',
      fontWeight: 'bold',
      fontSize: 14,
},

});

export default OtpPage;
