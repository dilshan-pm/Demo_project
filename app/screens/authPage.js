import React, { useEffect } from "react";
import { View, Text, Alert, StyleSheet, Image, Platform } from "react-native";

const AuthPage = ({ navigation, route }) => {
  const otp = route.params?.otp;

  const handleVerify = () => {
    console.log("Verify button clicked");
    console.log("Entered OTP:", otp);

    if (!otp) {
      if (Platform.OS === "web") {
        window.alert("Error: OTP is required");
      } else {
        Alert.alert("Error", "OTP is required");
      }
      return;
    }

    if (otp.toString() === "123456") {
      if (Platform.OS === "web") {
        window.alert("Success: OTP Verified Successfully");
      } else {
        Alert.alert("Success", "OTP Verified Successfully");
      }
      navigation.replace("Home");
    } else {
      if (Platform.OS === "web") {
        window.alert("Error: Invalid OTP");
      } else {
        Alert.alert("Error", "Invalid OTP");
      }
      navigation.replace("OTP", { error: "Invalid OTP" });
    }
  };

  useEffect(() => {
    if (!otp) {
      navigation.replace("OTP");
      return;
    }

    const timer = setTimeout(() => {
      handleVerify();
    }, 1500);

    return () => clearTimeout(timer);
  }, [otp]);

  return (
    <View style={styles.loadingContainer}>
      <Image source={require("../assets/Auth.png")} style={styles.logo} />
      <Text style={styles.loadingText}>Verifying OTP, Please Wait ..</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eaf4ff",
  },
  logo: {
    width: 500,
    height: 500,
    marginBottom: 20,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 18,
  },
});

export default AuthPage;
