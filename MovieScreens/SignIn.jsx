import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { TextInput } from 'react-native-paper';

const height = Dimensions.get('screen').height;

export default function Register({ navigation }) {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
 

  const validateEmail = () => {
   
    if (!email) {
      setEmailError('Email is required');
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Invalid email address');
      return false;
    }
    setEmailError('');
    return true;
  };

  return (
    <ScrollView style={{backgroundColor:'#26282C', width:'100%', height:'100%'}}>

      <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={{marginTop:30,flexDirection:'row'}}>
      <Icon name="arrow-back" size={24} color="yellow" />
        <Text style={{color:'white',fontSize:20}}>REGISTER</Text>
      </TouchableOpacity>

 <View style={{backgroundColor:'#26282c',justifyContent:'center',alignItems:'center'}}>
    <View >
 <Text style={{color:'white',fontSize:30}}>  <Image source={require('../assets/logo.jpg')} />MUVI</Text>

</View>
<Text style={{color:'white',marginTop:20,fontSize:15}}>Sign up to discaver all our movies and enjoy </Text>
<Text style={{color:'white',fontSize:15}}>our feature</Text>
</View>

     
      <View style={{  marginBottom: 20 ,color:'white',marginTop:20,marginRight:20}}>
     
      <TextInput
          style={{ borderBottomWidth: 1, borderColor: 'transparent', marginBottom: 10, backgroundColor: '#26282c', color: 'white' }}
          placeholder="Email Address"
          placeholderTextColor="gray"
          value={email}
          onChangeText={setEmail}
         
          right={<TextInput.Icon name="email-outline" color={"orange"} />}
        />
        {emailError ? <Text style={{ color: 'red' }}>{emailError}</Text> : null}

       
        <TextInput
          style={{ borderBottomWidth: 2, borderColor: '#26282c', marginBottom: 10 ,backgroundColor:'#26282c',color:'white'}}
          placeholder="Password"
          placeholderTextColor="gray"
          right={<TextInput.Icon name="lock-outline" color={"orange"}/>}
          secureTextEntry={true}
        />
        <TextInput
          style={{ borderBottomWidth: 1, borderColor: '#26282c', marginBottom: 10,backgroundColor:'#26282c',color:'white' }}
          placeholder="Confirm Password"
          placeholderTextColor="gray"
          right={<TextInput.Icon name="lock-outline" color={"orange"}/>}
          secureTextEntry={true}
        />
      </View>

  <View>

  <TouchableOpacity  onPress={()=>navigation.navigate('Sign-Up')} style={{ backgroundColor: '#fdd130', padding: 15, borderRadius: 5, float:'button' }}> 
      <Text style={{ color: 'black', textAlign: 'center' }}>Sign Up</Text>
    </TouchableOpacity>
    <Text style={{ color: 'white', textAlign: 'center',marginTop:10}}> By sign up I accept privacy and conditions</Text>
  </View>
      
 

<TouchableOpacity style={{ backgroundColor: 'black', padding: 15, borderRadius: 5, float:'button' ,marginTop:10}}>
    <Text style={{ color: 'white', textAlign: 'center',marginTop:10 }}>
    <MaterialCommunityIcons name="apple" size={20} color="white" />   Sign Up with Apple</Text>
  </TouchableOpacity>
  <TouchableOpacity style={{ backgroundColor: 'white', padding: 15, borderRadius: 5, float:'button' ,marginTop:15}}>
    <Text style={{ color: 'black', textAlign: 'center' }}> <MaterialCommunityIcons name="google" size={20} color="red" />   Sign Up with Google</Text>
    
  </TouchableOpacity>


<View>

  <Text style={{ color: 'white', textAlign: 'center',marginTop:5}}> Already have an account?</Text>
</View>

    </ScrollView>
  );
}
