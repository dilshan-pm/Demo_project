import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

export default function ScanHistoryScreen() {
    const [scanHistory, setScanHistory] = useState([]);

    return (
        <View style={styles.container}>
            {scanHistory.length === 0 ? (
                <View style={styles.noDataContainer}>
                    <Text style={styles.noDataText}>NOTHING FOUND</Text>
                </View>
            ) : (
                <FlatList
                    data={scanHistory}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.historyItem}>
                            <Image source={{ uri: item.uri }} style={styles.image} />
                            <Text style={styles.timestamp}>{item.timestamp}</Text>
                        </View>
                    )}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#121212' },
    noDataContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    noDataText: { fontSize: 24, fontWeight: 'bold', color: 'gray' },
    historyItem: { marginBottom: 20, alignItems: 'center' },
    image: { width: 300, height: 200, borderRadius: 10 },
    timestamp: { marginTop: 5, color: 'white', fontSize: 16 },
});
