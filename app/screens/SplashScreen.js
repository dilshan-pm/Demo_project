import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
// import { Audio } from 'expo-av';

export default function SplashScreen({ navigation }) {
    const [sound, setSound] = useState(null);

    useEffect(() => {
        // const playSound = async () => {
        //     const { sound } = await Audio.Sound.createAsync(
        //         require('./assets/splash-sound.mp3') 
        //     );
        //     setSound(sound)
        //     await sound.playAsync();
        // };

        // playSound();

        const timer = setTimeout(() => {
            if (sound) {
                sound.stopAsync();
            }
            navigation.replace('Login'); 
        }, 3100);

        return () => {
            clearTimeout(timer);
            if (sound) {
                sound.unloadAsync();
            }
        };
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>CashScan</Text>
            <Text style={styles.body}>Real or Fake</Text>
            <StatusBar style="light" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212', // Dark Theme Background
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontFamily: "Courier New", // Cool Typewriter Font
        fontSize: 100,
        fontWeight: 'bold',
        color: '#FFFFFF', // White Text for Contrast
        letterSpacing: 2, // Adds spacing for style
    },
    body: {
        fontFamily: "Arial",
        fontSize: 50,
        color: '#FFFFFF',
        letterSpacing: 2,
    },
});