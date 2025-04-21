import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
  Easing,
} from "react-native";
import { StatusBar } from "expo-status-bar";

export default function SplashScreen({ navigation }) {
  const [showIntro, setShowIntro] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(500)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }),
    ]).start();

    const timer = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }).start(() => setShowIntro(true));
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style={showIntro ? "dark" : "light"} />

      {/* Splash Section */}
      {!showIntro && (
        <Animated.View style={[styles.splashContainer, { opacity: fadeAnim }]}>
          <Animated.View
            style={{
              transform: [{ translateX: slideAnim }],
            }}
          >
            <Text style={styles.splashText}>CashScan</Text>
          </Animated.View>
        </Animated.View>
      )}

      {/* Intro Section */}
      {showIntro && (
        <View style={styles.introContainer}>
          <Image
            source={require("../assets/money.png")}
            style={styles.image}
            resizeMode="contain"
          />

          <Text style={styles.heading}>Login to your Account</Text>
          <Text style={styles.subheading}>
            Your companion in the fight against counterfeit currency, securing
            every transaction with just a scan!!
          </Text>

          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.nextButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  splashContainer: {
    flex: 1,
    backgroundColor: "#eaf4ff",
    alignItems: "center",
    justifyContent: "center",
  },
  splashText: {
    fontSize: 42,
    fontWeight: "900",
    color: "#175599",
    letterSpacing: 1,
    fontFamily: "serif",
    fontStyle: "italic",
  },
  introContainer: {
    flex: 1,
    backgroundColor: "#eaf4ff",
    paddingHorizontal: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1B1B1B",
    marginBottom: 20,
  },
  image: {
    width: 500,
    height: 500,
    marginBottom: 30,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1B1B1B",
    textAlign: "center",
    marginBottom: 10,
  },
  subheading: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 30,
  },
  nextButton: {
    backgroundColor: "#95c7fc",
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginBottom: 15,
    width: "20%",
    alignItems: "center",
  },
  nextButtonText: {
    color: "#000000",
    fontWeight: "600",
    fontSize: 16,
  },
});
