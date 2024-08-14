import { View, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native';
import React, { useEffect,useState } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from '../../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../configs/fireBaseConfig'; 
export default function SignIn() {
    // Initializing navigation and router hooks
    const navigation = useNavigation();
    const router = useRouter();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    useEffect(() => {
        // Hide the header using navigation options
        // Note: In expo-router, this is often handled in _layout.js
        navigation.setOptions({
            headerShown: false
        });
    }, []); // Empty dependency array means this effect runs only once when the component mounts
const onSignIn =()=>{
    if(!email&&!password){
        ToastAndroid.show("please enter valid Email and password",ToastAndroid.BOTTOM)
    }
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    router.replace('/mytrip')
    console.log("log una");
    
  

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage,errorCode)
    if(errorCode=='auth/invalid-email'){
        ToastAndroid.show("Invalid",ToastAndroid.BOTTOM);
    }
  });
}
    return (
        <View style={{ padding: 25,
        paddingTop:40,
        backgroundColor: Colors.WHITE, height: '100%' }}>
            {/* Main heading for the sign-in screen */}
            <TouchableOpacity onPress={()=>router.back()} style={{ position: 'absolute', top: 50, left: 10 }}>
    <Ionicons name="arrow-back" size={24} color="black" />
</TouchableOpacity >

            <Text
                style={{
                    fontStyle: "normal",
                    fontWeight: "bold",
                    textAlign: "center",
                    marginTop: 60,
                    fontSize: 30
                }}>
                 
                Let's Sign You in
            </Text>
         
            <View>
          
                {/* Subheading with a welcome message */}
                <Text
                    style={{
                        marginTop: 20,
                        color: "gray",
                        textAlign: "justify",
                        fontSize: 30
                    }}>
                    Welcome Back
                </Text>
            </View>

            <View>
                {/* Another part of the welcome message */}
                <Text
                    style={{
                        color: "gray",
                        textAlign: "justify",
                        fontSize: 30
                    }}>
                    You've been missed!
                </Text>
            </View>

            {/* Email input field */}
            <View style={{ marginVertical: 25 }}>
                <Text
                    style={{
                        fontSize: 10
                    }}>
                    Email
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(value)=>setEmail(value)}
                  // Hides text input for privacy
                    placeholder='Enter email' // Placeholder text inside the input field
                />
            </View>

            {/* Password input field */}
            <View>
                <Text
                    style={{
                        fontStyle: "normal",
                        fontSize: 10
                    }}>
                    Password
                </Text>
                <TextInput
                    type="Password" // Specifies the type of input
                    style={styles.input}
                    onChangeText={(value)=>setPassword(value)}
                    secureTextEntry={true} // Hides text input for password security
                    placeholder='Enter Password' // Placeholder text inside the input field
                />
            </View>

            {/* Sign-in button */}
            <TouchableOpacity
                style={styles.button}
                onPress={onSignIn} // Navigate to the sign-in screen
            >
                <Text style={{
                    color: Colors.WHITE,
                    textAlign: "center",
                    fontSize: 12
                }}>
                    Sign in
                </Text>
            </TouchableOpacity>

            {/* Create account button */}
            <TouchableOpacity
                style={styles.button2}
                onPress={() => router.replace('auth/sign-up')} // Navigate to the sign-up screen
            >
                <Text style={{
                    color: Colors.PRIMARY,
                    textAlign: "center",
                    fontSize: 12
                }}>
                    Create Account
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    // Style for text inputs
    input: {
        padding: 10,
        borderRadius: 20, // Rounded corners for the input field
        borderWidth: 1, // Border width of the input field
        borderColor: "gray" // Border color of the input field
    },
    // Style for the sign-in button
    button: {
        padding: 15,
        backgroundColor: Colors.PRIMARY, // Background color of the button
        borderRadius: 10, // Rounded corners for the button
        marginTop: '15%' // Top margin for spacing
    },
    // Style for the create account button
    button2: {
        padding: 15,
        borderColor: "black", // Border color for the button
        borderWidth: 1, // Border width of the button
        borderRadius: 10, // Rounded corners for the button
        marginTop: '5%' // Top margin for spacing
    }
});
