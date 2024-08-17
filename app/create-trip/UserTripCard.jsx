import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Colors } from '../../constants/Colors';
import moment from 'moment';

export default function UserTripCard({ userTrip }) {
    const latestTrip = JSON.parse(userTrip.tripData);

console.log(latestTrip);
    return (
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.container}>
                <Image
                    source={require('../../assets/images/anu.jpg')}
                    style={styles.image}
                />
                <View style={styles.tripCard}>
                <Text style={styles.locationText}>{userTrip.tripPlan?.["Main Location Address"]} </Text>
               



                    <View style={{}}>
                    <Text style={styles.Text}>{latestTrip.travellerType?.title}{latestTrip.travellerType?.icon}</Text>
                    <Text style={styles.Text}>{moment(latestTrip.startdate).format('DD MMMM')}</Text>
                    </View>
                  
                </View>
              
               
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#fff',
   
    
 // Light grey background color
  },
  container: {
    padding: 20,
    height:'auto',
    display:'flex',
    flexDirection:'row',

    alignItems:'center',
    backgroundColor: '#ffffff', // White background for the card
    borderRadius: 10,
  
    marginVertical: 10,
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3, // Sha
  },
  image: {
    width: '40%',
    height: 80,
    borderRadius: 20,
    objectFit:'cover'

  },
  tripCard: {
    marginHorizontal:10,
    backgroundColor: '#ffffff', // White background for the card
    borderRadius: 10,
    textAlign:'left',
    
   
  
    
  },
  locationText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
 
    // Dark grey text color
  },
  Text: {
    fontSize: 10,
    fontWeight: '400',
    color: '#333',
 
    // Dark grey text color
  },
  button: {
    
    backgroundColor: Colors.PRIMARY,
    borderRadius: 99,
    marginTop: '5%',
  },
  buttonText: {
    color: Colors.WHITE,
    textAlign: "center",
    fontSize: 12,
  },
});
