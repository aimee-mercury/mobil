
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height


export default function GetStarted({ navigation }) {
    return (
        <View>
            <StatusBar style="light" />
            <ImageBackground source={require('../assets/joker.jpg')}
                style={{ width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5' }}>
            </ImageBackground>
            <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', width: '100%', height: '100%', position: 'absolute' }}>
                <View style={{ marginTop: 300, alignSelf: 'center', display: 'flex', flexDirection: 'column', gap: 3,marginLeft:5 }} >
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: '700' }}>Enjoy your favourite</Text>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>movie everywhere</Text>
                    <Text style={{ color: 'white', fontSize: 15, marginTop: 20 }}>Browse through our collections and discover hundreds of movies and series that you will love</Text>
                </View>

                <TouchableOpacity style={{ marginTop:310 }}
                onPress={() =>
                    navigation.navigate('Watchmovie')
                }>
                <Text style={{ color: 'black', backgroundColor: '#FDD130', textAlign: 'center', padding: 10 }}>Get Started</Text>
            </TouchableOpacity>
            </View>
           
        </View>

    );
};