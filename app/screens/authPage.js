import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, Alert, StyleSheet, Platform } from 'react-native';
import axios from 'axios';

const AuthPage = ({ navigation, route }) => {
    const BASE_URL = 'http://192.168.1.40:3000';     
    const otp = route.params?.otp; 

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
            console.error('Error during OTP verification:', error);

            if (Platform.OS === 'web') {
                window.alert('Error: Invalid OTP');
            } else {
                Alert.alert('Error', 'Invalid OTP');
            }
            navigation.replace('OTP', { error: 'Invalid OTP' }); 
        }
    };

    useEffect(() => {
        if (!otp) {
            navigation.replace('OTP');
            return;
        }

        const timer = setTimeout(() => {
            handleVerify();
        }, 2000); 

        return () => clearTimeout(timer);  
    }, [otp]); 

    return (
        <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#000000" />
            <Text style={styles.loadingText}>Verifying OTP, Please Wait ..</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        marginTop: 10,
        fontSize: 18,
    },
});

export default AuthPage;
