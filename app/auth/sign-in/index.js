import { View, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from '../../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../configs/fireBaseConfig';

// Get screen dimensions
const { width, height } = Dimensions.get('window');

export default function SignIn() {
  const navigation = useNavigation();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, []);

  const onSignIn = () => {
    if (!email || !password) {
      ToastAndroid.show("Please enter valid Email and password", ToastAndroid.BOTTOM);
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        router.replace('/mytrip');
        console.log("User signed in");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
        if (errorCode === 'auth/invalid-email') {
          ToastAndroid.show("Invalid Email", ToastAndroid.BOTTOM);
        }
      });
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.heading}>Let's Sign You in</Text>

      <View>
        <Text style={styles.subheading}>Welcome Back</Text>
      </View>

      <View>
        <Text style={styles.subheading}>You've been missed!</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          placeholder='Enter email'
        />
      </View>

      <View>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          secureTextEntry={true}
          placeholder='Enter Password'
        />
      </View>

      <TouchableOpacity
        style={styles.signInButton}
        onPress={onSignIn}
      >
        <Text style={styles.signInButtonText}>Sign in</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.createAccountButton}
        onPress={() => router.replace('auth/sign-up')}
      >
        <Text style={styles.createAccountButtonText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: width * 0.05, // 5% of screen width
    paddingTop: height * 0.05, // 5% of screen height
    backgroundColor: Colors.WHITE,
    height: '100%',
  },
  backButton: {
    position: 'absolute',
    top: height * 0.05, // 5% from top
    left: width * 0.03, // 3% from left
  },
  heading: {
    fontSize: width * 0.07, // 7% of screen width
   
    textAlign: "center",
    marginTop: height * 0.08, // 7% from top
    fontFamily: 'poppins',
    marginBottom:height * 0.02, // Poppins Medium
  },
  subheading: {
    fontSize: width * 0.05, // 5% of screen width
    color: "gray",
    textAlign: "justify",
    fontFamily: 'poppinsmedium',
    // Poppins Regular
  },
  inputContainer: {
    marginVertical: height * 0.01, // 3% of screen height
  },
  label: {
    fontSize: width * 0.03, // 3% of screen width
    fontFamily: 'poppinsregular', // Poppins Regular
  },
  input: {
    padding: width * 0.03, // 3% of screen width
    borderRadius: width * 0.05, // 5% of screen width
    borderWidth: 1,
    borderColor: "gray",
    fontFamily: 'poppinsregular', // Poppins Regular
  },
  signInButton: {
    padding: width * 0.04, // 4% of screen width
    backgroundColor: Colors.PRIMARY,
    borderRadius: width * 0.05, // 5% of screen width
    marginTop: height * 0.05, // 5% of screen height
  },
  signInButtonText: {
    color: Colors.WHITE,
    textAlign: "center",
    fontSize: width * 0.03, // 3% of screen width
    fontFamily: 'poppinsmedium', // Poppins Medium
  },
  createAccountButton: {
    padding: width * 0.04, // 4% of screen width
    borderColor: "black",
    borderWidth: 1,
    borderRadius: width * 0.05, // 5% of screen width
    marginTop: height * 0.03, // 3% of screen height
  },
  createAccountButtonText: {
    color: Colors.PRIMARY,
    textAlign: "center",
    fontSize: width * 0.03, // 3% of screen width
    fontFamily: 'poppinsmedium', // Poppins Medium
  },
});
