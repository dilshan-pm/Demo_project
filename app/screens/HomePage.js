import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function HomePage({ navigation }) {
    const handleSignOut = () => {
        navigation.replace('Login'); 
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to the HomePage</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
export default HomePage;