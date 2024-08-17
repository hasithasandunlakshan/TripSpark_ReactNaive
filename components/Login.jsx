import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';

export default function Login() {
    const router =useRouter();
  return (
    <View >
      <Image 
        source={require('@/assets/images/Home.jpg')}
        style={{
          width: "100%",
          height: "40%",
        }}
      />
      <View style={styles.container}>
        <Text style={styles.title}>TripSpark</Text>
       
        <Text style={styles.title2}>Discover your next adventure effortlessly.Personalized itineraties at your fingertips.Travel Smarter with AI-Driven insights</Text>
        
        <TouchableOpacity  style={styles.button}
        
        
        onPress={()=>router.push('auth/sign-in')}
        >


        <Text style={{color:Colors.WHITE,textAlign:"center",
            fontSize:15,fontFamily:'poppinsregular',

          
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
    padding:20,
    borderWidth:3,
    shadowOffset:20,
    shadowColor:'black',
    shadowOpacity:1

  },
  title: {
    fontSize: 40,
    textAlign:'center',
    textDecorationStyle:'solid',
    
    fontFamily:'popitalic',
  },
  title2: {
     margin:'2%',
    fontSize: 20,
    textAlign:'center', 
  fontFamily:'poppinsmedium',
  fontWeight:'600'
  
  },
  button:{
    padding:10,
    backgroundColor:Colors.PRIMARY,
    borderRadius:99,
    marginTop:'5%'

  }
});
