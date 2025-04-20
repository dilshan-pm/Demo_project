import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Alert,
  Image,
  Dimensions,
  SafeAreaView,
} from 'react-native';

const { width } = Dimensions.get('window');

const OtpPage = ({ navigation, route }) => {
  const [otp, setOtp] = useState('');
  const { mobileNumber } = route.params;

  const handleSubmit = () => {
    if (otp.length < 6) {
      if (Platform.OS === 'web') {
        alert('Invalid OTP. Please enter a valid 6-digit OTP.');
      } else {
        Alert.alert('Invalid OTP', 'Please enter a valid 6-digit OTP.');
      }
    } else {
      navigation.replace('auth', { otp });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.heading}>Verify Phone</Text>
        <Text style={styles.subheading}>
          Please enter the OTP sent to your registered mobile number:
          <Text style={styles.number}>{mobileNumber}</Text>
        </Text>
        <Image source={require("../assets/otp.png")} style={styles.logo} />

        <TextInput
          style={styles.input}
          placeholder="Enter 6-digit OTP"
          keyboardType="numeric"
          maxLength={6}
          value={otp}
          onChangeText={setOtp}
          placeholderTextColor="#999"
        />

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.replace('Login')}
          >
            <Text style={styles.backText}>Go Back</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.verifyButton} onPress={handleSubmit}>
            <Text style={styles.verifyText}>Verify</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaf4ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: "#ffffff", //
    padding: 25,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 10 },
    shadowOpacity: 0.08,
    shadowRadius: 25,
    elevation: 8,
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
    color: '#1a1a1a',
  },
  subheading: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  number: {
    fontSize: 15,
    fontWeight: '400',
    color: '#000',
    marginLeft: 5,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  backButton: {
    width: '48%',
    height: 50,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  backText: {
    color: '#444',
    fontSize: 14,
    fontWeight: '500',
  },
  verifyButton: {
    width: '48%',
    height: 50,
    backgroundColor: '#95c7fc',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  verifyText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default OtpPage;
