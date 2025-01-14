import React from 'react';
import { View, ImageBackground, Text, StyleSheet, TextInput,TouchableOpacity } from 'react-native';

function OtpPage({navigation}) {
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
          />
        <View style={styles.ButtonContainer}>

        <TouchableOpacity 
        style={styles.Button}
        onPress={() => navigation.goBack()}>
            <Text style={styles.backButton}>Go Back</Text>
            </TouchableOpacity>          
        <TouchableOpacity style={styles.verifyButton}>
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
        padding: 20,
      },

    backButton: {
        fontSize: 14,
        color: '#444',
      },
      Button: {
        width: '40%',
        height: 45,
        borderRadius: 5,
        borderColor: '#ddd',
        borderWidth: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        top: 5,
        right: 3,
        opacity: "0"
      },
      verifyButton: {
        width: '40%',
        height: 45,
        backgroundColor: '#333',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        top: 5,
        left: 3
    },
      verifyText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 14,
}
})
