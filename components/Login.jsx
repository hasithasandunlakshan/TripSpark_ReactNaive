import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';

export default function Login() {
    const router =useRouter();
  return (
    <View>
      <Image 
        source={require('@/assets/images/login.jpg')}
        style={{
          width: "100%",
          height: 450,
        }}
      />
      <View style={styles.container}>
        <Text style={styles.title}>AI Travel Planner</Text>
       
        <Text style={styles.title2}>Discover your next adventure effortlessly.Personalized itineraties at your fingertips.Travel Smarter with AI-Driven insights</Text>
        
        <TouchableOpacity  style={styles.button}
        
        
        onPress={()=>router.push('auth/sign-in')}
        >


        <Text style={{color:Colors.WHITE,textAlign:"center",
            fontSize:12
          
        }}>Get Started</Text>
        </TouchableOpacity >
      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    marginTop: -20,
    height: '100%',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    padding:20

  },
  title: {
    fontSize: 25,
    textAlign:'center',
    textDecorationStyle:'solid',
    fontWeight:'bold'
  },
  title2: {
     marginTop:'5%',
    fontSize: 20,
    textAlign:'center', 
  },
  button:{
    padding:15,
    backgroundColor:Colors.PRIMARY,
    borderRadius:99,
    marginTop:'15%'

  }
});
