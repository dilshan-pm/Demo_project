import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ReportFakeNoteScreen() {
    const contacts = [
        {
            name: 'Reserve Bank of India (RBI)',
            phone: '18001234567', // Example helpline
            website: 'https://www.rbi.org.in',
        },
        {
            name: 'Local Police Station',
            phone: '100', // Emergency police number in India
            website: 'https://www.police.gov.in',
        },
        {
            name: 'Financial Intelligence Unit (FIU-IND)',
            phone: '01112345678', // Example number
            website: 'http://fiuindia.gov.in',
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
            <Text style={styles.header}>Report Fake Currency</Text>
            {contacts.map((contact, index) => (
                <View key={index} style={styles.contactCard}>
                    <Text style={styles.contactName}>{contact.name}</Text>
                    <TouchableOpacity style={styles.button} onPress={() => makeCall(contact.phone)}>
                        <Ionicons name="call" size={20} color="white" />
                        <Text style={styles.buttonText}>Call Now</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => openWebsite(contact.website)}>
                        <Ionicons name="globe" size={20} color="white" />
                        <Text style={styles.buttonText}>Visit Website</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#121212', alignItems: 'center' },
    header: { fontSize: 24, fontWeight: 'bold', color: 'white', marginBottom: 20 },
    contactCard: { backgroundColor: '#1E1E1E', padding: 15, borderRadius: 10, width: '90%', marginBottom: 15, alignItems: 'center' },
    contactName: { fontSize: 18, fontWeight: 'bold', color: 'white', marginBottom: 10 },
    button: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#36B761', padding: 10, borderRadius: 5, marginVertical: 5, width: '80%', justifyContent: 'center' },
    buttonText: { fontSize: 16, fontWeight: 'bold', color: 'white', marginLeft: 10 },
});
