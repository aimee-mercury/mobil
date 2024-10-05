import { View, Image, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function Mymovies({ image, title, overview }) {
    return (
        <View style={styles.card}>
            <Image
                source={{ uri: `https://image.tmdb.org/t/p/w500${image}` }}
                style={styles.image}
            />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.overview} numberOfLines={2}>{overview}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#2c2f33', // A darker background for contrast
        borderRadius: 8,
        margin: 10,
        padding: 10,
        alignItems: 'center',
        elevation: 2, // Shadow effect
    },
    image: {
        width: 120,
        height: 200,
        borderRadius: 8,
    },
    title: {
        color: '#F1B91C', // Color for the title
        fontWeight: 'bold',
        marginVertical: 5,
        textAlign: 'center', // Center the title text
    },
    overview: {
        color: '#ffffff', // Color for the overview text
        textAlign: 'center', // Center the overview text
    },
});
