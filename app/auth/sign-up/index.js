import { View, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from '../../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../../../configs/fireBaseConfig'; 
export default function SignIn() {
    // Initializing navigation and router hooks
    const navigation = useNavigation();
    const router = useRouter();
const [email,setEmail]=useState();
const [password,setPassword]=useState();
const [fullname,setFullname]=useState();
    useEffect(() => {
        // Hide the header using navigation options
        // Note: In expo-router, this is often handled in _layout.js
        navigation.setOptions({
            headerShown: false
        });
    }, []); // Empty dependency array means this effect runs only once when the component mounts


    const onCreateAccount=()=>{
        if(!email&& !password&&!fullname){
            ToastAndroid.show("please enter all details",ToastAndroid.BOTTOM)
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    // ..
  });

    }

    return (
        <View style={{ padding: 25, backgroundColor: Colors.WHITE, height: '100%' }}>
            {/* Main heading for the create account screen */}
            <TouchableOpacity onPress={()=>router.back()} style={{ position: 'absolute', top: 50, left: 10 }}>
    <Ionicons name="arrow-back" size={24} color="black" />
</TouchableOpacity >
            <Text style={{
                color: Colors.PRIMARY, // Text color for the heading
                textAlign: "center", // Center-align the text
                marginTop: 80, // Top margin for spacing
                fontSize: 30, // Font size for the heading
                fontWeight: "bold" // Bold text
            }}>
                Create your Account
            </Text>
            

            {/* Full Name input field */}
            <View style={{ marginTop: 25, marginBottom: 15 }}>
                <Text style={{ fontSize: 10 }}>Full Name</Text>
                <TextInput
                    style={styles.input}
                  // Hides text input for privacy (typically used for password fields)
                    placeholder='Enter FullName'
                    onChangeText={(value)=>setFullname(value)} // Placeholder text inside the input field
                />
            </View>

            {/* Email input field */}
            <View style={{ marginBottom: 15 }}>
                <Text style={{ fontSize: 10 }}>Email</Text>
                <TextInput
                    style={styles.input}
                   // Hides text input for privacy (again, typically used for password fields)
                   onChangeText={(value)=>setEmail(value)}  
                   placeholder='Enter email' // Placeholder text inside the input field
                />
            </View>

            {/* Password input field */}
            <View style={{ marginBottom: 15 }}>
                <Text style={{ fontSize: 10 }}>Password</Text>
                <TextInput
                    type="Password" // Specifies the type of input
                    style={styles.input}
                    onChangeText={(value)=>setPassword(value)} 
                    secureTextEntry={true} // Hides text input for password security
                    placeholder='Enter Password' // Placeholder text inside the input field
                />
            </View>

            {/* Create Account button */}
            <TouchableOpacity
                style={styles.button2}
                onPress={onCreateAccount} // Navigate to the sign-up screen
            >
                <Text style={{
                    color: Colors.PRIMARY, // Text color for the button
                    textAlign: "center", // Center-align the text
                    fontSize: 12 // Font size for the button text
                }}>
                    Create Account
                </Text>
            </TouchableOpacity>

            {/* Sign-in button */}
            <TouchableOpacity
                style={styles.button}
                onPress={() => router.push('auth/sign-in')} // Navigate to the sign-in screen
            >
                <Text style={{
                    color: Colors.WHITE, // Text color for the button
                    textAlign: "center", // Center-align the text
                    fontSize: 12 // Font size for the button text
                }}>
                    Sign in
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    // Style for text inputs
    input: {
        padding: 10, // Padding inside the input field
        borderRadius: 20, // Rounded corners for the input field
        borderWidth: 1, // Border width of the input field
        borderColor: "gray" // Border color of the input field
    },
    // Style for the sign-in button
    button: {
        padding: 15, // Padding inside the button
        backgroundColor: Colors.PRIMARY, // Background color of the button
        borderRadius: 10, // Rounded corners for the button
        marginTop: '5%' // Top margin for spacing
    },
    // Style for the create account button
    button2: {
        padding: 15, // Padding inside the button
        borderColor: "black", // Border color for the button
        borderWidth: 1, // Border width of the button
        borderRadius: 10, // Rounded corners for the button
        marginTop: '15%' // Top margin for spacing
    }
});
