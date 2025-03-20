import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Camera } from 'expo-camera';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
    const navigation = useNavigation();
    const [hasPermission, setHasPermission] = useState(null);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const openScanner = () => {
        if (hasPermission === false) {
            Alert.alert("Camera Permission Denied", "Please allow camera access in settings.");
            return;
        }
        navigation.navigate('Scanner'); 
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>CashScan</Text>
            <Text style={styles.subtitle}>Detect counterfeit notes instantly</Text>

            {/* Scan Button */}
            <TouchableOpacity style={styles.scanButton} onPress={openScanner}>
                <Ionicons name="camera-outline" size={30} color="black" />
                <Text style={styles.buttonText}>Scan a Note</Text>
            </TouchableOpacity>

            {/* History Button */}
            <TouchableOpacity style={styles.historyButton} onPress={() => navigation.navigate('History')}>
                <Ionicons name="time-outline" size={24} color="white" />
                <Text style={styles.historyText}>View History</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#FFFFFF',
        fontFamily: 'Courier New',
        textTransform: 'uppercase',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        color: '#AAAAAA',
        textAlign: 'center',
        marginBottom: 40,
    },
    scanButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#36B761',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
        marginLeft: 10,
    },
    historyButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#333333',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
    },
    historyText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginLeft: 10,
    },
});