import { View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { SelectTravelList } from '../../constants/options';
import OptionCard from '../../components/CreateTrip/OptionCard';
import { Colors } from '../../constants/Colors';
import { CreateTripContext } from "../../context/createTripContext";

export default function createtraveller() {
  const router = useRouter();
  const navigation = useNavigation();
  const [selectedTraveller, setSelectedTraveller] = useState();
  const { tripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTranseparent: true,
      headerTitle: ''
    });
  }, []);

  useEffect(() => {
    setTripData({ ...tripData, travellerType: selectedTraveller });
  }, [selectedTraveller]);

  return (
    <ScrollView
      style={{
        padding: 25,
        height: '100%',
        backgroundColor: '#fff',
      
      }}
    >
      <View  style={{  justifyContent:'center'}}>
        <Text
          style={{
            fontSize: 30,
         
            fontFamily: 'poppins' // Apply custom font
          }}
        >
          Who's Travelling
        </Text>
        <Text
          style={{
            fontSize: 25,
        
         
            
            fontFamily: 'poppinsmedium' // Apply custom font
          }}
        >
          Choose your Travellers
        </Text>

        <FlatList
          data={SelectTravelList}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => setSelectedTraveller(item)}
              style={{ marginVertical: 5 }}
            >
              <OptionCard option={item} selectedTraveller={selectedTraveller} />
            </TouchableOpacity>
          )}
        />

      </View>

      <TouchableOpacity
        style={{
          padding: 5,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 99,
          marginTop: 5
        }}
        onPress={() => router.push('/create-trip/Select-Date')}
      >
        <Text
          style={{
            color: Colors.WHITE,
            textAlign: "center",
            fontSize: 20,
          
            fontFamily: 'poppinsmedium' // Apply custom font
          }}
        >
          Continue
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
