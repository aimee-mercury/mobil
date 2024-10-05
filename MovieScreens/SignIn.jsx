import React, { useState } from 'react';
import { Text, Image, Pressable, View, Dimensions,TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { TextInput } from "react-native-paper"; // Import TextInput from react-native-paper

var width = Dimensions.get("screen");
var height = Dimensions.get("screen");

export default function Login({ navigation }) {
    const [email, setEmail] = useState(''); // State for email
    const [password, setPassword] = useState(''); // State for password
    const [error, setError] = useState(''); // State for error messages

    const handleLogin = () => {
        // Simple validation for email and password
        if (!email.trim()) {
            setError('Please enter your email address');
            return; // Prevent navigation if no email
        }
        if (!password.trim() || password.length < 6) {
            setError('Password must be at least 6 characters long');
            return; // Prevent navigation if password is too short
        }

        // Dummy authentication logic
        if (email === 'aimee22@gmail.com' && password === '12345') {
            // Navigate to Main screen after successful login
            navigation.navigate('Main');
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <View style={{ height: "100%", width: "100%", backgroundColor: "#1F2123" }}>
            <View style={{ marginTop: 50, display: "flex", flexDirection: 'row', }}>
                <MaterialCommunityIcons onPress={() => navigation.navigate('Sign-Up')} name='arrow-left' style={{ marginHorizontal: 20 }} size={23} color={"#FDD130"} />
                <Text style={{ fontSize: 20, fontWeight: "600", color: "white" }}>Login</Text>
            </View>
            <View>
                <Image source={require('../assets/logo.jpg')} style={{ alignSelf: "center", margin: 40 }} />
                <Text style={{ color: "white", fontWeight: "300", width: "90%", fontSize: 18, textAlign: "center", alignSelf: "center" }}>
                    Log in to enjoy many benefits and we won't let you go!
                </Text>
            </View>

            <View style={{ width: "90%", display: 'flex', marginVertical: 20, alignItems: "center", alignSelf: "center" }}>
                {/* Input field for email */}
                <TextInput
                    style={{ width: "100%", backgroundColor: "transparent", marginBottom: 10 }}
                    label={"Email address"}
                    textColor='grey'
                    theme={{ colors: { text: 'white', primary: 'orange' } }}
                    right={<TextInput.Icon icon={"email-outline"} size={20} color={"#FDD130"} />}
                    value={email}
                    onChangeText={setEmail}
                />

                {/* Input field for password */}
                <TextInput
                    style={{ width: "100%", backgroundColor: "transparent" }}
                    label={"Password"}
                    textColor='grey'
                    theme={{ colors: { text: 'white', primary: 'orange' } }}
                    right={<TextInput.Icon icon={"lock-outline"} size={20} color={"#FDD130"} />}
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                
                {/* Display error messages */}
                {error ? <Text style={{ color: 'red', marginTop: 5 }}>{error}</Text> : null}
            </View>

            <View style={{ width: "90%", alignSelf: "center" }}>
                <TouchableOpacity  onPress={()=>navigation.navigate('Main')} style={{ width: "100%", backgroundColor: "#FDD130", margin: 5, paddingVertical: 6, borderRadius: 4, alignSelf: "center" }}>
                    <Text style={{ fontSize: 16, fontWeight: "300", padding: 4, alignSelf: "center" }}>Get started</Text>
                </TouchableOpacity>
                <Text style={{ width: "100%", textAlign: "right", color: "#FDD130", fontWeight: "200", marginTop: 5 }}>Forgot password?</Text>

                <Text style={{ textAlign: "center", alignSelf: "center", color: "white", marginVertical: 12 }}>Or Login with</Text>

                <Pressable style={{ width: "100%", backgroundColor: "black", margin: 5, paddingVertical: 6, borderRadius: 4, alignSelf: "center" }}>
                    <Text style={{ fontSize: 16, fontWeight: "300", justifyContent: "center", color: "white", padding: 4, alignSelf: "center" }}>
                        <MaterialCommunityIcons name='apple' color={"white"} size={22} />
                        <View style={{ width: 10 }}></View>
                        Login with Apple
                    </Text>
                </Pressable>

                <Pressable style={{ width: "100%", backgroundColor: "white", paddingVertical: 6, borderRadius: 4, alignSelf: "center" }}>
                    <Text style={{ fontSize: 16, fontWeight: "300", padding: 4, alignSelf: "center" }}>
                        <MaterialCommunityIcons name='google' color={"red"} size={22} />
                        <View style={{ width: 10 }}></View>
                        Login with Google
                    </Text>
                </Pressable>

                <View style={{ width: "100%", height: 20 }}></View>
            </View>

            <View style={{ display: "flex", flexDirection: "row", alignSelf: "center", bottom: 0 }}>
                <Text style={{ color: "white" }}>Don't have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Sign-Up')} style={{ display: "flex", justifyContent: "center" }} >
                    <Text style={{ color: "#FDD130" }}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
