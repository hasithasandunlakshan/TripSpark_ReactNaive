import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

export default function Hotels({ hotels }) {
  return (
    <View style={styles.container}>
      <Image 
        source={ require('../../assets/images/Hotel.jpg')}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.name}>{hotels?.['Hotel name']}</Text>
     
      <Text style={styles.address}>{hotels?.Address}</Text>
      <Text style={styles.price}>{hotels?.['Price per night']}💲</Text>
      <Text style={styles.rating}>{hotels?.Rating} ⭐</Text>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
    width:150,
      padding: 5,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 10,
      marginBottom: 30,
      backgroundColor: '#fff',
      margin:5,
      minHeight:250
      
    },
    image: {
      width: '100%',
      height: 100,
      borderRadius: 10,
      marginBottom: 1,
    },
    name: {
      fontSize: 15,
      fontFamily: 'poppinsmedium',
      marginBottom: 5,
    },
 
    address: {
      fontSize: 10,
      color: '#444',
 
    fontFamily: 'poppinsmedium',
   
    },
    price: {

      fontSize: 10,
      color: '#444',
 
    fontFamily: 'poppinsmedium',
    },
    rating: {
      fontSize: 10,
      color: '#444',
 
    fontFamily: 'poppins',
    },
    scrollContainer: {
      padding: 20,
    },
  });