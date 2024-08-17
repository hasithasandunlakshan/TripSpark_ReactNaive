import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Colors } from '../../constants/Colors';
import moment from 'moment';
import UserTripCard from './UserTripCard';
import { useRouter } from 'expo-router';

export default function UserTripList({ userTrip }) {
    const latestTrip = JSON.parse(userTrip[0].tripData);
//     console.log("hiiiiiiiiiiii");
// console.log(latestTrip);
const router=useRouter();
    return (
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.container}>
               
                <View style={styles.tripCard}>
                <Image
                    source={require('../../assets/images/login.jpg')}
                    style={styles.image}
                />
                <Text style={styles.locationText}>{userTrip[0].tripPlan?.["Main Location Address"]}</Text>
               



                    <View style={{display:'flex' ,flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={styles.normalText}> {latestTrip.travellerType?.title} Trip {latestTrip.travellerType?.icon}</Text>
                    <Text style={styles.normalText}>{moment(latestTrip.startdate).format('DD MMMM')}</Text>
                    </View>
                  
                </View>
              
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => router.push({pathname:'/trip-detail',params:{trip:JSON.stringify(userTrip[0])}})}
                >
                    <Text style={styles.buttonText}>See your plan</Text>
                </TouchableOpacity>
            </View>


            <Text style={styles.locationText}>Upcoming Trips</Text>

            <View>
            {userTrip.slice(1).map((location, index) => (
  <TouchableOpacity 
    key={index} 
    onPress={() => router.push({ pathname: '/trip-detail', params: { trip: JSON.stringify(location) } })}
  >
    <UserTripCard userTrip={location} />
  </TouchableOpacity>
))}

              

             
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#fff',
    height:'auto',
    marginBottom:20,
    fontFamily:'poppins',// Light grey background color
  },
  container: {
    padding: 20,
    fontFamily:'poppinsmedium',
  },
  image: {
    width: '100%',
    height: 240,
    borderRadius: 20,
    objectFit: 'cover',
  },
  tripCard: {
    width: '100%',
    backgroundColor: '#ffffff', // White background for the card
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    shadowColor: '#000', // Shadow color for iOS
   borderWidth:2
   // Shadow for Android
  },
  locationText: {
    fontSize: 18,
   
    color: '#333', 
    marginVertical:5 ,
    fontFamily:'poppins',// Dark grey text color
  },
  normalText: {
    fontSize: 10,
    fontWeight: '500',
    color: '#333',
    fontFamily:'poppinsmedium', // Dark grey text color
  },
  button: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 99,
    marginTop: '5%',
  },
  buttonText: {
    color: Colors.WHITE,
    textAlign: "center",
    fontSize: 12,
    fontFamily:'poppinsmedium',
  },
});
