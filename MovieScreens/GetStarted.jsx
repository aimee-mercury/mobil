import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function GetStarted({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar style="light" />
            <ImageBackground 
                source={require('../assets/joker.jpg')} 
                style={{ width: '100%', height: '100%', justifyContent: 'center' }} 
                imageStyle={{ opacity: 0.5 }} // Add opacity to the image background
            >
                <View style={{ 
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                    flex: 1, 
                    flexDirection: 'column-reverse', // Reverse column to push content down
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    paddingBottom: 50 // Control bottom padding
                }}>
                    <TouchableOpacity 
                        style={{ 
                            backgroundColor: '#FDD130', 
                            borderRadius: 5, // Rounded corners
                            padding: 10, 
                            width: '80%', // Wider button
                            marginBottom: 30 // Ensure spacing from the bottom
                        }}
                        onPress={() => navigation.navigate('Watchmovie')}
                    >
                        <Text style={{ 
                            color: 'black', 
                            textAlign: 'center', 
                            fontWeight: 'bold' // Bold text for button
                        }}>
                            Get Started
                        </Text>
                    </TouchableOpacity>

                    <View style={{ 
                        alignItems: 'center', 
                        marginBottom: 30 // Space above the button
                    }}>
                        <Text style={{ 
                            color: 'white', 
                            fontSize: 20, 
                            fontWeight: '700', 
                            textAlign: 'center' 
                        }}>
                            Enjoy your favourite
                        </Text>
                        <Text style={{ 
                            color: 'white', 
                            fontSize: 24, // Slightly larger font for emphasis
                            fontWeight: 'bold', 
                            textAlign: 'center' 
                        }}>
                            movie everywhere
                        </Text>
                        <Text style={{ 
                            color: 'white', 
                            fontSize: 15, 
                            marginTop: 20, 
                            textAlign: 'center', 
                            paddingHorizontal: 20 // Add padding for better readability
                        }}>
                            Browse through our collections and discover hundreds of movies and series that you will love
                        </Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};
