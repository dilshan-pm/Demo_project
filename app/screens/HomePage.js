import React, { useState, useEffect } from 'react';
import { View, Text, Button, Modal, StyleSheet, TouchableOpacity, Pressable, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Icon } from 'react-native-elements';
import { Camera } from 'expo-camera';
import { useNavigation } from '@react-navigation/native';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
      (async () => {
          const { status } = await Camera.requestCameraPermissionsAsync();
          setHasPermission(status === 'granted');
      })();
  }, []);

  const openScanner = () => {
    if (Platform.OS === 'web') {
      Alert.alert(
        "Not supported",
        "Camera scanning is not supported on web. Only upload works.",
        [
          {
            text: "OK",
            onPress: () => navigation.navigate('Scanner'), 
          }
        ]
      );
      return;
    }
  
    if (hasPermission === false) {
      Alert.alert("Camera Permission Denied", "Please allow camera access in settings.");
      return;
    }
  
    navigation.navigate('Scanner');
  };
  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.dotContainer}>
          </View>
          <Text style={styles.headerTitle}>CashScan</Text>
        </View>
        <TouchableOpacity onPress={openModal}>
          <Icon name="user" type="font-awesome" size={24} color="gray" />
        </TouchableOpacity>
      </View>

      {/* MAIN CONTENT */}
      <View style={styles.main}>
        <Text style={styles.title}>Think, plan, and track</Text>
        <Text style={styles.subtitle}>all in one place</Text>
        <Text style={styles.description}>Efficiently manage your tasks and boost productivity.</Text>

        <TouchableOpacity style={styles.scanButton} onPress={openScanner}>
          <Ionicons name="camera-outline" size={24} color="white" />
          <Text style={styles.buttonText}>Scan a Note</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.foundButton} onPress={() => navigation.navigate('Found')}>
          <Ionicons name="alert-circle-outline" size={24} color="white" />
          <Text style={styles.buttonText}>Found a Fake?</Text>
        </TouchableOpacity>
      </View>

      {/* MODAL */}
      <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={closeModal}>
        <View style={styles.modalBackdrop}>
          <View style={styles.modalContent}>
            <Pressable onPress={closeModal} style={styles.closeButton}>
              <Icon name="times" type="font-awesome" size={24} color="gray" />
            </Pressable>
            <Text style={styles.modalTitle}>User Menu</Text>
            <Text style={styles.modalDescription}>This is a placeholder modal for user actions like sign in or profile.</Text>
            <Button title="Sign In" onPress={() => {}} color="#3B82F6" />
            <Button title="Get Demo" onPress={() => {}} color="#10B981" />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaf4ff',
    paddingTop: 40,
  },
  header: {
    backgroundColor: '#fbfbfb',
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dotContainer: {
    flexDirection: 'row',
    marginRight: 8,
  },
  headerTitle: {
    fontWeight: '500',
    fontSize: 22,
    fontStyle: 'italic',
  },
  main: {
    backgroundColor: '#fbfbfb',
    borderRadius: 20,
    padding: 24,
    marginTop: 20,
    marginHorizontal: 16,
    alignItems: 'center',
    elevation: 2,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 24,
    fontWeight: '400',
    color: '#9CA3AF',
    textAlign: 'center',
    marginTop: 4,
  },
  description: {
    fontSize: 14,
    color: '#4B5563',
    marginTop: 16,
    textAlign: 'center',
  },
  scanButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#111827',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    marginTop: 24,
  },
  foundButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EF4444',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    marginTop: 16,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    marginLeft: 10,
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 24,
    width: '80%',
    alignItems: 'center',
    elevation: 5,
  },
  closeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  modalDescription: {
    fontSize: 14,
    color: '#4B5563',
    marginBottom: 16,
    textAlign: 'center',
  },
});

export default App;
