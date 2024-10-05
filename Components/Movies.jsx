import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function Movies({ image, title, onpress }) {
    return (
        <TouchableOpacity onPress={onpress} style={styles.container}>
            <Image 
                source={{ uri: `https://image.tmdb.org/t/p/w500${image}` }} 
                style={styles.image} 
                resizeMode="cover" 
            />
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 5, // Smaller margin for a compact look
        borderRadius: 8,
        overflow: 'hidden',
        alignItems: 'center', // Center content
        backgroundColor: 'transparent', // Maintain transparency
    },
    image: {
        width: 120, // Smaller width for the image
        height: 180, // Adjust height for aesthetics
        borderRadius: 8,
    },
    title: {
        color: 'white', // Use a contrasting color for better visibility
        fontWeight: 'bold',
        fontSize: 12, // Smaller font size
        textAlign: 'center',
        marginTop: 5, // Margin for spacing
    },
});
