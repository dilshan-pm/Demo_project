import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import axios from 'axios';

function HomePage({ navigation }) {
    const [isLoading, setIsLoading] = useState(true);
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        axios.get('http://192.168.1.40:3000/subjects') 
            .then(response => {
                setSubjects(response.data);
                setIsLoading(false); 
            })
            .catch(error => {
                console.error("Error fetching subjects:", error);
                setIsLoading(false); 
            });
    }, []); 

    if (isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#000000" />
                <Text style={styles.loadingText}>Please Wait ..</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Tenth Standard Subjects</Text>
            <FlatList
                data={subjects}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Text style={styles.item}>
                        {item.id}. {item.subject}
                </Text>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
    },
    loadingText: {
        fontSize: 14,
        top: 10,
        color: '#555',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingTop: 50,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    item: {
        fontSize: 18,
        marginVertical: 5,
    },
});

export default HomePage;
