import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Icon } from "react-native-elements";
import { Camera } from "expo-camera";
import { useNavigation } from "@react-navigation/native";

const App = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const navigation = useNavigation();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const signOut = () => {
    navigation.replace("Login");
  };

  const openScanner = () => {    
    if (Platform.OS === "web") {
      window.alert("Camera scanning is not supported on web. Please upload an image instead.");
      
      console.log("Attempting navigation to Scanner");
      try {
        navigation.navigate("Scanner");
      } catch (error) {
        console.error("Navigation error:", error);
      }
      return;
    }
    if (hasPermission === false) {
      Alert.alert(
        "Camera Permission Denied",
        "Please allow camera access in settings."
      );
      return;
    }
  
    navigation.navigate("Scanner");
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.dotContainer}></View>
          <Text style={styles.headerTitle}>CashScan</Text>
        </View>
        <View style={{ position: "relative" }}>
          <TouchableOpacity onPress={toggleDropdown}>
            <Icon name="user" type="font-awesome" size={24} color="gray" />
          </TouchableOpacity>
          {dropdownVisible && (
            <View style={styles.dropdown}>
              <Image
                source={require("../assets/profile.png")}
                style={styles.avatar}
              />
              <Text style={styles.welcome}>Welcome User</Text>
              <TouchableOpacity style={styles.signOutButton} onPress={signOut}>
                <Text style={styles.signOutText}>Sign Out</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>

      {/* MAIN CONTENT */}
      <View style={styles.main}>
        <Image
          source={require("../assets/detect.png")}
          style={{ width: 300, height: 300, marginBottom: 20, borderRadius: 5 }}
        />
        <Text style={styles.title}>Fake Currency Detection</Text>
        <Text style={styles.subtitle}>
          Instantly verify banknotes using your mobile camera
        </Text>
        <Text style={styles.description}>
          Our app scans for watermarks, security threads, and hidden patterns to
          detect counterfeit bills in seconds. Works with multiple currencies to
          protect your business and give you peace of mind.
        </Text>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.scanButton} onPress={openScanner}>
            <Ionicons name="camera-outline" size={24} color="black" />
            <Text style={styles.buttonText}>Scan</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.foundButton}
            onPress={() => navigation.navigate("Found")}
          >
            <Ionicons name="alert-circle-outline" size={24} color="black" />
            <Text style={styles.buttonText}>Report</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d4e5fa",
    paddingTop: 40,
  },
  header: {
    backgroundColor: "#fbfbfb",
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 3,
    zIndex: 10,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  dotContainer: {
    flexDirection: "row",
    marginRight: 8,
  },
  headerTitle: {
    fontWeight: "500",
    fontSize: 22,
    fontFamily: "sans-serif",
    fontStyle: "italic",
  },
  main: {
    backgroundColor: "#fbfbfb",
    borderRadius: 20,
    padding: 24,
    marginTop: 20,
    marginHorizontal: 16,
    alignItems: "center",
    elevation: 2,
    height: "88%",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#111827",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "400",
    color: "#9CA3AF",
    textAlign: "center",
    marginTop: 4,
  },
  description: {
    fontSize: 14,
    color: "#4B5563",
    marginTop: 16,
    textAlign: "center",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 5,
    marginTop: 20,
  },

  scanButton: {
    width: "48%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#95c7fc",
    paddingVertical: 5,
    paddingHorizontal: 45,
    borderRadius: 8,
  },

  foundButton: {
    width: "48%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 5,
    paddingHorizontal: 45,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#ddd",
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#444",
    margin: 7,
  },
  dropdown: {
    position: "absolute",
    top: 36,
    right: 0,
    width: 200,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    zIndex: 999,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignSelf: "center",
    marginBottom: 10,
  },
  welcome: {
    fontWeight: "600",
    fontSize: 16,
    textAlign: "center",
  },
  mobile: {
    fontSize: 12,
    color: "#6B7280",
    textAlign: "center",
    marginBottom: 10,
    marginTop: 4,
  },
  signOutButton: {
    backgroundColor: "#EF4444",
    paddingVertical: 8,
    borderRadius: 8,
    marginTop: 8,
  },
  signOutText: {
    color: "#fff",
    fontWeight: "600",
    textAlign: "center",
  },
});

export default App;
