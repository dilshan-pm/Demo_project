import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';

export default function ScannerScreen({ navigation }) {
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
            const { status } = await ImagePicker.requestCameraPermissionsAsync();
            setHasCameraPermission(status === 'granted');
        })();
    }, []);

    // Open the camera
    const openCamera = async () => {
        if (hasCameraPermission === null) {
            Alert.alert("Permission Error", "Camera permission is not determined yet.");
            return;
        }
        if (!hasCameraPermission) {
            Alert.alert("Permission Denied", "Please enable camera access from settings.");
            return;
        }

        try {
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                quality: 1,
            });

            if (!result.canceled) {
                setImage(result.assets[0].uri);
            }
        } catch (error) {
            Alert.alert("Error", "Failed to open the camera.");
        }
    };

    // Open the file picker (Gallery)
    const pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                quality: 1,
            });

            if (!result.canceled) {
                setImage(result.assets[0].uri);
            }
        } catch (error) {
            Alert.alert("Error", "Failed to open gallery.");
        }
    };

    return (
        <View style={styles.container}>
            {image ? (
                <View style={styles.preview}>
                    <Image source={{ uri: image }} style={styles.image} />
                    <TouchableOpacity style={styles.button} onPress={() => setImage(null)}>
                        <Ionicons name="camera-outline" size={30} color="white" />
                        <Text style={styles.buttonText}>Retake</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={openCamera}>
                        <Ionicons name="camera" size={30} color="white" />
                        <Text style={styles.buttonText}>Open Camera</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={pickImage}>
                        <Ionicons name="image" size={30} color="white" />
                        <Text style={styles.buttonText}>Upload Image</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' },
    buttonContainer: { flexDirection: 'column', alignItems: 'center', width: '100%' },
    button: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        backgroundColor: '#36B761', 
        paddingVertical: 15, 
        paddingHorizontal: 20, 
        borderRadius: 10, 
        marginVertical: 10,
        width: '80%',
        justifyContent: 'center'
    },
    buttonText: { fontSize: 18, fontWeight: 'bold', color: 'white', marginLeft: 10 },
    preview: { justifyContent: 'center', alignItems: 'center' },
    image: { width: 300, height: 400, borderRadius: 10 },
});
