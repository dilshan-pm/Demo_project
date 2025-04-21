import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ReportFakeNoteScreen({ navigation }) {
  const contacts = [
    {
      name: "Reserve Bank of India (RBI)",
      description: "Report fake notes to the RBI.",
      image: require("../assets/rbi.png"),
      phone: "(022) 22604000",
      website: "https://www.rbi.org.in",
    },
    {
      name: "Local Police Station",
      description: "Report fake notes to the Police.",
      image: require("../assets/kp.png"),
      phone: "100",
      website: "https://keralapolice.gov.in/",
    },
    {
      name: "Financial Intelligence Unit (FIU-IND)",
      description: "Report suspicious transactions.",
      image: require("../assets/fiu.png"),
      phone: "+91-1123319793",
      website: "http://fiuindia.gov.in",
    },
  ];

  const makeCall = (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const openWebsite = (url) => {
    Linking.openURL(url);
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
        <Text style={styles.title}>Found a Fake Note?</Text>
        <Text style={styles.subtitle}>Reach out to the right authorities</Text>

        {contacts.map((contact, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.cardContent}>
              <View style={styles.textContainer}>
                <Text style={styles.contactName}>{contact.name}</Text>
                <Text style={styles.subtitle}>{contact.description}</Text>
              </View>

              <Image source={contact.image} style={styles.image} />

              <View style={styles.buttonGroup}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => makeCall(contact.phone)}
                >
                  <Ionicons name="call-outline" size={18} color="black" />
                  <Text style={styles.buttonText}>Call Now</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.button}
                  onPress={() => openWebsite(contact.website)}
                >
                  <Ionicons name="globe-outline" size={18} color="black" />
                  <Text style={styles.buttonText}>Visit Website</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
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
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "400",
    color: "#9CA3AF",
    textAlign: "center",
    marginTop: 3,
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#ebedf0",
    padding: 10,
    borderRadius: 12,
    width: "100%",
    marginBottom: 10,
    marginTop: 10,
  },

  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  textContainer: {
    flex: 1,
    marginRight: 10,
  },

  contactName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 4,
  },

  subtitle: {
    fontSize: 14,
    color: "#333333",
  },

  image: {
    width: 120,
    height: 120,
    marginHorizontal: 10,
    rowGap: 4,
  },

  buttonGroup: {
    width: "20%",
    alignItems: "center",
    justifyContent: "space-between",
  },

  button: {
    width: "100%",
    backgroundColor: "#95c7fc",
    padding: 10,
    borderRadius: 6,
    marginVertical: 4,
    alignItems: "center",
    justifyContent: "center",
  },
});
