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
      <Text style={styles.name}>{hotels?.HotelName}</Text>
     
      <Text style={styles.address}>{hotels?.Address}</Text>
      <Text style={styles.price}>{hotels?.PricePerNight}</Text>
      <Text style={styles.rating}>{hotels?.Rating} ⭐</Text>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      padding: 5,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 10,
      marginBottom: 10,
      backgroundColor: '#fff',
    },
    image: {
      width: '50%',
      height: 100,
      borderRadius: 10,
      marginBottom: 1,
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },
 
    address: {
      fontSize: 12,
      color: '#777',
      marginBottom: 0,
    },
    price: {
      fontSize: 16,
      color: '#333',
      marginBottom: 5,
    },
    rating: {
        fontWeight: 'bold',
      fontSize: 14,
      color: '#444',
    },
    scrollContainer: {
      padding: 20,
    },
  });