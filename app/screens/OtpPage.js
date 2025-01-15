import React, {useState} from 'react';
import { View, Platform, Text, StyleSheet, TextInput,TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';

const OtpPage = ({ navigation }) => {
  const [otp, setOtp] = useState('');
  
  const BASE_URL =
    Platform.OS === 'android' ? 'http://10.0.2.2:3000' 
      : Platform.OS === 'ios' ? 'http://localhost:3000' 
      : 'http://192.168.1.40:3000';

  const handleVerify = async () => {
    console.log('Verify button clicked'); 
    console.log('Entered OTP:', otp);   
      try {
          const response = await axios.post(`${BASE_URL}/verify-otp`, { otp });

          if (response.status === 200) {
            if (Platform.OS === 'web') {
              window.alert('Success: OTP Verified Successfully');
            } else {
              Alert.alert('Success', 'OTP Verified Successfully');
            }
            navigation.replace('Home');
          }
        } catch (error) {
          if (Platform.OS === 'web') {
            window.alert('Error: Invalid OTP');
          } else {
            Alert.alert('Error','Invalid OTP');
          }
        }
      };
    return (
        <View style={styles.container}>
          <Text style={styles.heading}>Verify Phone</Text>
          <Text style={styles.subheading}>
            Code has been sent to your Mobile Number
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter the OTP"
            keyboardType="numeric"
            maxLength={6}
            value={otp}
            onChangeText={(value) => {
              setOtp(value);
            }}
          />
        <View style={styles.ButtonContainer}>

        <TouchableOpacity 
        style={styles.Button}
        onPress={() => navigation.replace('Login')}>
            <Text style={styles.backButton}>Go Back</Text>
            </TouchableOpacity>          
        <TouchableOpacity style={styles.verifyButton}
        onPress={handleVerify}>
            <Text style={styles.verifyText}>Verify</Text>
            </TouchableOpacity>
        </View>
        </View>
      );
    };
    
export default OtpPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    heading: {
        fontSize: 25,
        fontWeight: 'bold',
        bottom: 15,
      },
    subheading: {
        fontSize: 14,
        color: '#555',
        bottom: 5,
        textAlign: 'center',
      },
    input: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        paddingHorizontal: 10,
        top: 10,
      },
      ButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 25,
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
        width: Platform.OS === 'ios'? '50%' : Platform.OS === 'android'?'50%': '250%',
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
}
})
