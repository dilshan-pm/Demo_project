import React from 'react';
import { StyleSheet, Text, TextInput, SafeAreaView, ImageBackground, Image, TouchableOpacity } from 'react-native';


function WelcomeScreen({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <Image 
            source={require('../assets/mobile.png')} 
            style={styles.logo}/>

            <Text 
            style={styles.heading}>
                Verify your Mobile Number</Text>
            <Text 
            style={styles.subheading}>
                Please enter your details to sign in</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Mobile Number"
                    keyboardType="numeric"
                    maxLength={10}
                />
            <TouchableOpacity 
            style={styles.Button}
            onPress={() => navigation.replace('OTP')}
            >
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
        width: '90%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        paddingHorizontal: 10,
        bottom: 10,
      },
    Button: {
        width: '90%',
        height: 45,
        borderRadius: 7,
        backgroundColor: '#333',
        justifyContent: 'center',
        alignItems: 'center',
      },
      signInText: {
        color: '#fff',
        fontWeight: 'bold',
      },
});

  
export default WelcomeScreen;