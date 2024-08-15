import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Colors } from '../../constants/Colors';
import moment from 'moment';

export default function UserTripList({ userTrip }) {
    const latestTrip = JSON.parse(userTrip[3].tripData);

console.log(latestTrip);
    return (
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.container}>
                <Image
                    source={require('../../assets/images/Mytrip.jpg')}
                    style={styles.image}
                />
                <View style={styles.tripCard}>
                    <Text style={styles.locationText}>{userTrip[3].tripPlan?.main_location_address}</Text>

                    <View style={{display:'flex' ,flexDirection}}>
                    <Text style={styles.locationText}>{latestTrip.travellerType?.title}  {latestTrip.travellerType?.icon}</Text>
                    <Text style={styles.locationText}>{moment(latestTrip.startdate).format('DD MMMM')}</Text>
                    </View>
                  
                </View>
              
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => router.push('auth/sign-in')}
                >
                    <Text style={styles.buttonText}>See your plan</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    height:'auto' // Light grey background color
  },
  container: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 240,
    borderRadius: 20,
    objectFit: 'cover',
  },
  tripCard: {
    backgroundColor: '#ffffff', // White background for the card
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3, // Shadow for Android
  },
  locationText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333', // Dark grey text color
  },
  button: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 99,
    marginTop: '15%',
  },
  buttonText: {
    color: Colors.WHITE,
    textAlign: "center",
    fontSize: 12,
  },
});
