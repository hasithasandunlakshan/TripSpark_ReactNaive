import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { CreateTripContext } from "../../context/createTripContext";
import { Colors } from '../../constants/Colors';
import moment from 'moment';

export default function ReviewTrip() {
  const router = useRouter();
  const navigation = useNavigation();
  const { tripData } = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: '',
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Review Your Trip</Text>
      
      <View style={styles.infoBox}>
        <Text style={styles.label}>Location</Text>
        <Text style={styles.value}>{tripData?.location}</Text>
      </View>
      
      <View style={styles.infoBox}>
        <Text style={styles.label}>Traveler Type</Text>
        <Text style={styles.value}>{tripData?.travellerType?.title} ({tripData?.travellerType?.people} people)</Text>
      </View>
      
      <View style={styles.infoBox}>
        <Text style={styles.label}>Dates</Text>
        <Text style={styles.value}>{moment(tripData?.startdate).format('DD MMM')} to {moment(tripData?.enddate).format('DD MMM')}</Text>
      </View>
      
      <View style={styles.infoBox}>
        <Text style={styles.label}>Budget Type</Text>
        <Text style={styles.value}>{tripData?.budget}</Text>
      </View>
      <View style={{alignItems:'center'}}>
      <TouchableOpacity style={styles.buildTripButton} onPress={() => router.push('/create-trip/generate-trip')}>
        <Text style={styles.buildTripButtonText}>Build Trip</Text>
      </TouchableOpacity>
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    marginTop: 50,
    height: '100%',
    justifyContent: 'center'
  },
  heading: {
    fontSize: 30,
    fontFamily: 'poppins', // Use Poppins Medium
    marginBottom: 20,
    textAlign: 'center',
    color: Colors.PRIMARY,
  },
  infoBox: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.PRIMARY,
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontFamily: 'poppinsmedium', // Use Poppins Medium
    color: Colors.PRIMARY,
  },
  value: {
    fontSize: 18,
    fontFamily: 'poppinsregular', // Use Poppins Regular
    marginTop: 5,
    color: Colors.BLACK,
  },
  buildTripButton: {
    marginTop: 3,
    backgroundColor: Colors.PRIMARY,
    paddingVertical: 1,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal:'auto',
    width:'50%'
  },
  buildTripButtonText: {
    color: Colors.WHITE,
    fontSize: 18,
    fontFamily: 'poppinsmedium', // Use Poppins
  },
});
