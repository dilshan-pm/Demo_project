import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function ScannerScreen({ navigation }) {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      setHasCameraPermission(status === "granted");
    })();
  }, []);

  const openCamera = async () => {
    if (hasCameraPermission === null) {
      Alert.alert(
        "Permission Error",
        "Camera permission is not determined yet."
      );
      return;
    }
    if (!hasCameraPermission) {
      Alert.alert(
        "Permission Denied",
        "Please enable camera access from settings."
      );
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

  const handleConfirmImage = async () => {
    if (!image) return;
  
    const formData = new FormData();
    formData.append("file", {
      uri: image,
      name: "note.jpg",
      type: "image/jpeg",
    });
  
    try {
      const response = await fetch("http://YOUR_BACKEND_URL/upload", {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      const data = await response.json();
      Alert.alert("Scan Result", data.result || "No result returned.");
    } catch (error) {
      console.error("Error uploading image:", error);
      Alert.alert("Error", "Something went wrong while uploading the image.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.replace("Home")}
          >
            <Ionicons name="arrow-back" size={24} color="#111827" />
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.main}>
        {image ? (
         <>
         <View style={styles.imageTextContainer}>
           <Text style={styles.imageTitle}>Captured Image</Text>
           <Text style={styles.imageSubtitle}>
             Confirm or retake the image to be scanned
           </Text>
         </View>
       
         <Image source={{ uri: image }} style={styles.image} />
       
         <View style={styles.buttonRow}>
           <TouchableOpacity
             style={styles.scanButton}
             onPress={() => setImage(null)}
           >
             <Ionicons name="camera-outline" size={20} color="black" />
             <Text style={styles.buttonText}>Retake</Text>
           </TouchableOpacity>
       
           <TouchableOpacity
             style={styles.scanButton}
             onPress={handleConfirmImage}
           >
             <Ionicons name="checkmark-done-outline" size={20} color="black" />
             <Text style={styles.buttonText}>Confirm</Text>
           </TouchableOpacity>
         </View>
       </>
        ) : (
          <>
            <Image
              source={require("../assets/scan.png")}
              style={{
                width: 300,
                height: 300,
                marginBottom: 20,
                borderRadius: 5,
              }}
            />
            <Text style={styles.title}>Fake Currency Detection</Text>
            <Text style={styles.subtitle}>
              Scan or Upload the currency to be verified
            </Text>
            <Text style={styles.description}>
              Disclaimer: Make sure the picture is taken from a well-lit area and the
              currency is clearly visible.
            </Text>

            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.scanButton} onPress={openCamera}>
                <Ionicons name="camera" size={24} color="black" />
                <Text style={styles.buttonText}>Camera</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
                <Ionicons name="image" size={24} color="black" />
                <Text style={styles.buttonText}>Upload</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d4e5fa",
    paddingTop: 40,
    alignItems: "center",
  },
  header: {
    width: "98%",
    backgroundColor: "#fbfbfb",
    borderRadius: 10,
    padding: 20,
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
  backButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  backText: {
    fontSize: 18,
    color: "#000",
    marginLeft: 6,
    fontWeight: "600",
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
    width: "98%",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#111827",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 20,
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
    gap: 12,
    marginTop: 24,
  },
  scanButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#95c7fc",
    paddingVertical: 5,
    paddingHorizontal: 45,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#222",
    margin: 7,
  },
  imageTextContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  
  imageTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  
  imageSubtitle: {
    fontSize: 14,
    color: "#9CA3AF",
    marginTop: 4,
  },
  
  uploadButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingVertical: 5,
    paddingHorizontal: 45,
    borderRadius: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  preview: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 400,
    borderRadius: 10,
    marginBottom: 20,
  },
});
