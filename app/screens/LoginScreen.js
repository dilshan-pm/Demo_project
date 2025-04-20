import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  Platform,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Alert,
  View,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

function LoginScreen({ navigation }) {
  const [mobileNumber, setMobileNumber] = useState("");

  const handleSignIn = () => {
    if (mobileNumber.length === 10) {
      navigation.replace("OTP", { mobileNumber });
    } else {
      if (Platform.OS === "web") {
        alert(
          "Invalid Mobile Number. Please enter a valid 10-digit mobile number."
        );
      } else {
        Alert.alert(
          "Invalid Mobile Number",
          "Please enter a valid 10-digit mobile number."
        );
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.heading}>Sign in with mobile</Text>
        <Text style={styles.subheading}>
          Please enter your registered mobile number to sign in to your account
        </Text>
        <Image source={require("../assets/mobile.png")} style={styles.logo} />

        <TextInput
          style={styles.input}
          placeholder="Enter Mobile Number"
          keyboardType="numeric"
          maxLength={10}
          value={mobileNumber}
          onChangeText={setMobileNumber}
          placeholderTextColor="#999"
        />

        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.signInText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eaf4ff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 350,
    height: 350,
    marginBottom: 20,
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
    fontWeight: "700",
    marginBottom: 10,
    color: "#1a1a1a",
  },
  subheading: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 20,
  },
  button: {
    width: "100%",
    height: 50,
    borderRadius: 12,
    backgroundColor: "#95c7fc",
    justifyContent: "center",
    alignItems: "center",
  },
  signInText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default LoginScreen;
