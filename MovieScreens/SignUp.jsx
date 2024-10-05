import React from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { TextInput } from 'react-native-paper'; // Import TextInput from react-native-paper

const height = Dimensions.get('screen').height;

export default function Register({ navigation }) {
  return (
    <ScrollView style={{ backgroundColor: '#26282C', width: '100%', height: '100%' }}>
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ marginTop: 30, flexDirection: 'row' }}>
        <Icon name="arrow-back" size={24} color="yellow" />
        <Text style={{ color: 'white', fontSize: 20 }}>REGISTER</Text>
      </TouchableOpacity>

      <View style={{ backgroundColor: '#26282c', justifyContent: 'center', alignItems: 'center' }}>
        <View>
          <Text style={{ color: 'white', fontSize: 30 }}>
            <Image source={require('../assets/logo.jpg')} /> MUVI
          </Text>
        </View>
        <Text style={{ color: 'white', marginTop: 20, fontSize: 15 }}>Sign up to discover all our movies and enjoy</Text>
        <Text style={{ color: 'white', fontSize: 15 }}>our features</Text>
      </View>

      <View style={{ marginBottom: 20, marginTop: 20, marginRight: 20 }}>
        {/* Input field for email */}
        <TextInput
          style={{ backgroundColor: '#26282c', color: 'white', marginBottom: 10 }}
          placeholder="Email Address"
          placeholderTextColor="gray"
        />

        {/* Input field for password */}
        <TextInput
          style={{ backgroundColor: '#26282c', color: 'white', marginBottom: 10 }}
          placeholder="Password"
          placeholderTextColor="gray"
          secureTextEntry={true}
        />

        {/* Input field for confirm password */}
        <TextInput
          style={{ backgroundColor: '#26282c', color: 'white', marginBottom: 10 }}
          placeholder="Confirm Password"
          placeholderTextColor="gray"
          secureTextEntry={true}
        />
      </View>

      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Sign-In')} style={{ backgroundColor: '#fdd130', padding: 15, borderRadius: 5 }}>
          <Text style={{ color: 'black', textAlign: 'center' }}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={{ color: 'white', textAlign: 'center', marginTop: 10 }}>By signing up, I accept the privacy and conditions</Text>
      </View>

      <TouchableOpacity style={{ backgroundColor: 'black', padding: 15, borderRadius: 5, marginTop: 10 }}>
        <Text style={{ color: 'white', textAlign: 'center', marginTop: 10 }}>
          <MaterialCommunityIcons name="apple" size={20} color="white" /> Sign Up with Apple
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ backgroundColor: 'white', padding: 15, borderRadius: 5, marginTop: 15 }}>
        <Text style={{ color: 'black', textAlign: 'center' }}>
          <MaterialCommunityIcons name="google" size={20} color="red" /> Sign Up with Google
        </Text>
      </TouchableOpacity>

      <View>
        <Text style={{ color: 'white', textAlign: 'center', marginTop: 5 }}>Already have an account?</Text>
      </View>
    </ScrollView>
  );
}
