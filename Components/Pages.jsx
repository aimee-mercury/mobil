import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

export default function Pages({ image, text, onPress }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Image
                source={{ uri: `https://image.tmdb.org/t/p/w500${image}` }}
                style={styles.image}
            />
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        overflow: 'hidden', // Ensures rounded corners
        marginBottom: 15, // Adds space between cards
        backgroundColor: 'black', // Optional: adds a background for better visibility
    },
    image: {
        width: 330, // Width of the image
        height: 200, // Height of the image
    },
    text: {
        position: 'absolute',
        color: 'black', // Changed to black for better contrast against the yellow background
        fontWeight: 'bold',
        fontSize: 15,
        right: 10, // Adjusted for better placement
        top: 10, // Adjusted for better placement
        borderRadius: 4,
        padding: 5, // Adds padding for better text appearance
        backgroundColor: '#F1B91C', // Background color of the text
        opacity: 0.9, // Slightly more opaque for better readability
    },
});
