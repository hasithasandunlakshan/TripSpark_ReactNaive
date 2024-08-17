import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

export default function Places({ place }) {
  return (
    <View style={styles.card}>
      <Image 
        source={require('../../assets/images/placecard.jpg')} 
        style={styles.image} 
      />
      <View style={styles.infoContainer}>
        <Text style={styles.day}>{place.Day}</Text>
        <Text style={styles.placeName}>{place["Place name"]}</Text>
        <Text style={styles.description}>{place["Detailed description"]}</Text>
        <Text style={styles.travelTime}>
          Estimated travel time: {place["Estimated travel time to each location"]}
        </Text>
        <Text style={styles.ticketPricing}>
          Ticket pricing: {place["Ticket pricing"]}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    width: '100%',
  },
  image: {
    width: '100%',
    height: 200,
  },
  infoContainer: {
    padding: 15,
  },
  day: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  placeName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  travelTime: {
    fontSize: 12,
    color: '#777',
    marginBottom: 5,
  },
  ticketPricing: {
    fontSize: 12,
    color: '#777',
  },
});
